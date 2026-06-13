"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { AtPassportIcon, AtPassportUI } from "@atpassport/client/ui";
import { 
  Plus, 
  Trash2, 
  ExternalLink, 
  LogOut, 
  Settings, 
  RefreshCw, 
  Sliders, 
  Globe, 
  Tags, 
  Eye, 
  BookOpen,
  Info,
  CheckCircle,
  AlertCircle,
  FileText,
  User,
  Compass,
  Pencil,
  X,
  ArrowLeft
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TagsInput } from "@/components/ui/tags-input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";

interface Feed {
  repo: string;
  rkey: string;
  filter?: string;
  search?: string;
  displayName?: string;
  description?: string;
  avatarCid?: string;
  avatarMimeType?: string;
  avatarSize?: number;
  createdAt?: string;
}

interface UserSession {
  handle: string;
  did: string;
}

const DEFAULT_API_BASE = "https://fg.shigepon.net";

export default function Home() {
  // Client mount state (prevents hydration mismatch)
  const [mounted, setMounted] = useState(false);
  const [isConfigLoaded, setIsConfigLoaded] = useState(false);

  // Config & API Base States (LocalStorage handles)
  const [apiBaseUrl, setApiBaseUrl] = useState(DEFAULT_API_BASE);
  const [tempApiBaseUrl, setTempApiBaseUrl] = useState(DEFAULT_API_BASE);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Authentication States
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserSession | null>(null);
  const [isLoadingSession, setIsLoadingSession] = useState(true);
  const [loginHandle, setLoginHandle] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoggingInWithAtPassport, setIsLoggingInWithAtPassport] = useState(false);

  // Feed Management States
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [isLoadingFeeds, setIsLoadingFeeds] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [feedToDelete, setFeedToDelete] = useState<string | null>(null);

  // Feed View & Edit States
  const [currentView, setCurrentView] = useState<"list" | "create" | "edit">("list");
  const [isEditing, setIsEditing] = useState(false);
  const [editingRkey, setEditingRkey] = useState("");

  // Feed Builder Form States
  const [rkey, setRkey] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [description, setDescription] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [existingAvatarCid, setExistingAvatarCid] = useState<string | null>(null);
  const [feedType, setFeedType] = useState<"Search" | "Filter">("Search");
  const [includeRawWords, setIncludeRawWords] = useState<string[]>([]);
  const [includeRawInput, setIncludeRawInput] = useState("");
  const [includeRawMode, setIncludeRawMode] = useState<"OR" | "AND">("OR");
  const [includeWords, setIncludeWords] = useState<string[]>([]);
  const [includeInput, setIncludeInput] = useState("");
  const [includeMode, setIncludeMode] = useState<"OR" | "AND">("OR");
  const [excludeRawWords, setExcludeRawWords] = useState<string[]>([]);
  const [excludeRawInput, setExcludeRawInput] = useState("");
  const [excludeWords, setExcludeWords] = useState<string[]>([]);
  const [excludeInput, setExcludeInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagsInput, setTagsInput] = useState("");
  const [langs, setLangs] = useState("");
  const [replyFilter, setReplyFilter] = useState<"all" | "only" | "exclude">("all");
  const [imagesFilter, setImagesFilter] = useState<"all" | "only" | "exclude">("all");
  const [videoFilter, setVideoFilter] = useState<"all" | "only" | "exclude">("all");
  const [externalFilter, setExternalFilter] = useState<"all" | "only" | "exclude">("all");
  const [labelsFilter, setLabelsFilter] = useState<"all" | "only" | "exclude">("all");
  const [sourceType, setSourceType] = useState<"all" | "me" | "user">("all");
  const [sourceUserDid, setSourceUserDid] = useState("");
  const [sourceUserHandle, setSourceUserHandle] = useState("");
  const [actorSuggestions, setActorSuggestions] = useState<any[]>([]);
  const [selectedActor, setSelectedActor] = useState<any | null>(null);
  const [isLoadingActorSuggestions, setIsLoadingActorSuggestions] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  
  // Advanced Query Toggle
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [rawCondition, setRawCondition] = useState("");

  // Resolve Handle to DID helper
  const resolveHandleToDid = async (handle: string): Promise<string | null> => {
    try {
      const cleanHandle = handle.replace(/^@/, "").trim();
      if (!cleanHandle) return null;

      const res = await fetch(`https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=${encodeURIComponent(cleanHandle)}`);
      const data = await res.json();
      if (data && !data.error && data.did) {
        setSelectedActor(data);
        setSourceUserDid(data.did);
        setSourceUserHandle(data.handle);
        return data.did;
      }
      return null;
    } catch (e) {
      console.error("Failed to resolve handle to DID:", e);
      return null;
    }
  };

  // Fetch actor profile for display when DID changes (e.g. on edit)
  useEffect(() => {
    if (sourceUserDid.startsWith("did:")) {
      if (selectedActor && selectedActor.did === sourceUserDid) return;
      fetch(`https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=${encodeURIComponent(sourceUserDid)}`)
        .then(res => res.json())
        .then(data => {
          if (data && !data.error) {
            setSelectedActor(data);
            setSourceUserHandle(data.handle);
          }
        })
        .catch(err => {
          console.error("Failed to fetch actor profile for DID:", err);
        });
    } else {
      setSelectedActor(null);
      setSourceUserHandle("");
    }
  }, [sourceUserDid]);

  // Search actors based on typing handle
  useEffect(() => {
    if (!sourceUserHandle.trim() || (selectedActor && selectedActor.handle === sourceUserHandle)) {
      setActorSuggestions([]);
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      setIsLoadingActorSuggestions(true);
      fetch(`https://public.api.bsky.app/xrpc/app.bsky.actor.searchActorsTypeahead?q=${encodeURIComponent(sourceUserHandle)}&limit=5`)
        .then(res => res.json())
        .then(data => {
          if (data && Array.isArray(data.actors)) {
            setActorSuggestions(data.actors);
          } else {
            setActorSuggestions([]);
          }
        })
        .catch(err => {
          console.error("Failed to search actors:", err);
          setActorSuggestions([]);
        })
        .finally(() => {
          setIsLoadingActorSuggestions(false);
        });
    }, 450);

    return () => clearTimeout(delayDebounceFn);
  }, [sourceUserHandle, selectedActor]);

  // Set mount state and load configuration from local storage
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const savedApi = localStorage.getItem("rito_feed_editor_api_base");
      if (savedApi) {
        setApiBaseUrl(savedApi);
        setTempApiBaseUrl(savedApi);
      }
      setIsConfigLoaded(true);
    }
  }, []);

  // Check user session on mount after config is loaded, or when apiBaseUrl changes
  useEffect(() => {
    if (isConfigLoaded) {
      checkSession();
    }
  }, [isConfigLoaded, apiBaseUrl]);

  // Load feeds when authenticated
  useEffect(() => {
    if (isAuthenticated && isConfigLoaded && user) {
      loadFeeds();
    }
  }, [isAuthenticated, isConfigLoaded, apiBaseUrl, user]);

  // Generate Preview Query whenever form inputs change
  const generatedCondition = React.useMemo(() => {
    const parts: string[] = [];

    // 1-1. Include Raw words (text.raw contains)
    const finalRawIncludes = [...includeRawWords];
    if (includeRawInput.trim()) {
      const pending = includeRawInput.split(/[,\s\u3001]+/).map(w => w.trim()).filter(Boolean);
      pending.forEach(p => {
        if (!finalRawIncludes.includes(p)) finalRawIncludes.push(p);
      });
    }
    if (finalRawIncludes.length > 0) {
      const clauses = finalRawIncludes.map(w => `text.raw contains ${JSON.stringify(w)}`);
      if (clauses.length === 1) {
        parts.push(clauses[0]);
      } else {
        const joinOp = includeRawMode === "OR" ? " or " : " and ";
        parts.push(`(${clauses.join(joinOp)})`);
      }
    }

    // 1-2. Include Word-match words (text containsAny/containsAll)
    const finalIncludes = [...includeWords];
    if (includeInput.trim()) {
      const pending = includeInput.split(/[,\s\u3001]+/).map(w => w.trim()).filter(Boolean);
      pending.forEach(p => {
        if (!finalIncludes.includes(p)) finalIncludes.push(p);
      });
    }
    if (finalIncludes.length > 0) {
      const listStr = JSON.stringify(finalIncludes);
      if (includeMode === "OR") {
        parts.push(`text containsAny ${listStr}`);
      } else {
        parts.push(`text containsAll ${listStr}`);
      }
    }

    // 2-1. Exclude Raw words (not text.raw contains)
    const finalRawExcludes = [...excludeRawWords];
    if (excludeRawInput.trim()) {
      const pending = excludeRawInput.split(/[,\s\u3001]+/).map(w => w.trim()).filter(Boolean);
      pending.forEach(p => {
        if (!finalRawExcludes.includes(p)) finalRawExcludes.push(p);
      });
    }
    if (finalRawExcludes.length > 0) {
      const clauses = finalRawExcludes.map(w => `not (text.raw contains ${JSON.stringify(w)})`);
      parts.push(clauses.join(" and "));
    }

    // 2-2. Exclude Word-match words (not text containsAny)
    const finalExcludes = [...excludeWords];
    if (excludeInput.trim()) {
      const pending = excludeInput.split(/[,\s\u3001]+/).map(w => w.trim()).filter(Boolean);
      pending.forEach(p => {
        if (!finalExcludes.includes(p)) finalExcludes.push(p);
      });
    }
    if (finalExcludes.length > 0) {
      const listStr = JSON.stringify(finalExcludes);
      parts.push(`not (text containsAny ${listStr})`);
    }

    // 3. Tags (Convert to text.raw contains "#tag")
    const finalTags = [...tags];
    if (tagsInput.trim()) {
      const pending = tagsInput.split(/[,\s\u3001]+/).map(t => t.trim()).filter(Boolean);
      pending.forEach(p => {
        if (!finalTags.includes(p)) finalTags.push(p);
      });
    }
    if (finalTags.length > 0) {
      const clauses = finalTags.map(t => {
        const cleanTag = t.startsWith("#") ? t : `#${t}`;
        return `text.raw contains ${JSON.stringify(cleanTag)}`;
      });
      if (clauses.length === 1) {
        parts.push(clauses[0]);
      } else {
        parts.push(`(${clauses.join(" or ")})`);
      }
    }

    // 4. Languages
    if (langs.trim()) {
      const parsedLangs = langs
        .split(/[,\s\u3001]+/)
        .map(l => l.trim())
        .filter(Boolean);
      if (parsedLangs.length > 0) {
        const listStr = JSON.stringify(parsedLangs);
        parts.push(`langs containsAny ${listStr}`);
      }
    }

    // 5. Reply
    if (replyFilter === "only") {
      parts.push("reply exists");
    } else if (replyFilter === "exclude") {
      parts.push("not (reply exists)");
    }

    // 6. Embed.images
    if (imagesFilter === "only") {
      parts.push("embed.images exists");
    } else if (imagesFilter === "exclude") {
      parts.push("not (embed.images exists)");
    }

    // 7. Embed.video
    if (videoFilter === "only") {
      parts.push("embed.video exists");
    } else if (videoFilter === "exclude") {
      parts.push("not (embed.video exists)");
    }

    // 8. Embed.external
    if (externalFilter === "only") {
      parts.push("embed.external exists");
    } else if (externalFilter === "exclude") {
      parts.push("not (embed.external exists)");
    }

    // 9. Labels
    if (labelsFilter === "only") {
      parts.push("labels exists");
    } else if (labelsFilter === "exclude") {
      parts.push("not (labels exists)");
    }

    const filterSection = parts.length > 0 ? `\nfilter {\n  ${parts.join("\n  and ")}\n}` : "";

    let sourceStr = "all(newest)";
    if (sourceType === "me") {
      sourceStr = "postedBy($me, newest)";
    } else if (sourceType === "user" && sourceUserDid.trim()) {
      sourceStr = `postedBy(${JSON.stringify(sourceUserDid.trim())}, newest)`;
    }

    return `source {\n  ${sourceStr}\n}${filterSection}`;
  }, [
    includeRawWords,
    includeRawInput,
    includeRawMode,
    includeWords,
    includeInput,
    includeMode,
    excludeRawWords,
    excludeRawInput,
    excludeWords,
    excludeInput,
    tags,
    tagsInput,
    langs,
    replyFilter,
    imagesFilter,
    videoFilter,
    externalFilter,
    labelsFilter,
    sourceType,
    sourceUserDid
  ]);

  // Set initial raw condition value when toggled or updated
  useEffect(() => {
    if (!isAdvanced) {
      setRawCondition(generatedCondition);
    }
  }, [generatedCondition, isAdvanced]);

  // Session Checker with timeout logic
  const checkSession = async () => {
    setIsLoadingSession(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6 seconds timeout

    try {
      const response = await fetch(`${apiBaseUrl}/api/get_session`, {
        method: "GET",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
        credentials: "include",
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data.handle && data.did) {
          setUser({ handle: data.handle, did: data.did });
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error: any) {
      clearTimeout(timeoutId);
      console.error("Session check error:", error);
      setIsAuthenticated(false);
      setUser(null);
      if (error.name === "AbortError") {
        toast.error("APIサーバー接続がタイムアウトしました。設定を確認してください。");
      }
    } finally {
      setIsLoadingSession(false);
    }
  };

  // Load Feeds list from API with timeout logic
  const loadFeeds = async () => {
    if (!user?.did) return;
    setIsLoadingFeeds(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12 seconds timeout

    try {
      // 1. Get backend feeds list
      const fgResponse = await fetch(`${apiBaseUrl}/fg/list`, {
        method: "GET",
        credentials: "include",
        signal: controller.signal,
      });

      if (!fgResponse.ok) {
        if (fgResponse.status === 401) {
          setIsAuthenticated(false);
          setUser(null);
          toast.error("セッションが切れました。再ログインしてください。");
          return;
        }
        throw new Error("Failed to fetch backend feeds");
      }

      const fgData = await fgResponse.json();
      if (!fgData.success || !Array.isArray(fgData.feeds)) {
        throw new Error("Invalid backend feeds response");
      }

      // 2. Get PDS records list
      const pdsResponse = await fetch(
        `${apiBaseUrl}/api/list_records?repo=${encodeURIComponent(user.did)}&collection=app.bsky.feed.generator`,
        {
          method: "GET",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
          credentials: "include",
          signal: controller.signal,
        }
      );

      let pdsRecords: any[] = [];
      if (pdsResponse.ok) {
        const pdsData = await pdsResponse.json();
        pdsRecords = pdsData.records || [];
      } else {
        console.warn("Failed to fetch PDS records, proceeding with backend feeds only.");
      }

      // 3. Merge lists
      const mergedFeeds: Feed[] = fgData.feeds.map((fgFeed: any) => {
        const matchingRecord = pdsRecords.find((rec: any) => {
          const parts = rec.uri.split("/");
          const recRkey = parts[parts.length - 1];
          return recRkey === fgFeed.rkey;
        });

        return {
          ...fgFeed,
          displayName: matchingRecord?.value?.displayName || "",
          description: matchingRecord?.value?.description || "",
          avatarCid: matchingRecord?.value?.avatar?.ref?.["$link"] || "",
          avatarMimeType: matchingRecord?.value?.avatar?.mimeType || "",
          avatarSize: matchingRecord?.value?.avatar?.size || 0,
          createdAt: matchingRecord?.value?.createdAt || "",
        };
      });

      setFeeds(mergedFeeds);
      clearTimeout(timeoutId);
    } catch (error: any) {
      clearTimeout(timeoutId);
      console.error("Fetch feeds error:", error);
      toast.error("フィード一覧の読み込みに失敗しました。時間をおいて一覧を更新してください。");
    } finally {
      setIsLoadingFeeds(false);
    }
  };

  // Start Creating feed
  const handleStartCreate = () => {
    handleCancelEdit();
    setCurrentView("create");
    // Scroll to top smoothly
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Start Editing feed
  const handleStartEdit = (feed: Feed) => {
    setIsEditing(true);
    setEditingRkey(feed.rkey);
    setRkey(feed.rkey);
    setFeedType(feed.search ? "Search" : "Filter");

    // Form fields
    setDisplayName(feed.displayName || "");
    setDescription(feed.description || "");
    setExistingAvatarCid(feed.avatarCid || null);
    
    if (feed.avatarCid && feed.repo) {
      setAvatarPreview(`${apiBaseUrl}/api/get_blob?did=${encodeURIComponent(feed.repo)}&cid=${encodeURIComponent(feed.avatarCid)}`);
    } else {
      setAvatarPreview(null);
    }
    setAvatarFile(null);

    const query = feed.search || feed.filter || "";
    parseQueryToForm(query);

    setCurrentView("edit");

    // Scroll to form smoothly
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Cancel Editing feed / Go back to list
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingRkey("");
    setRkey("");
    setFeedType("Search");
    
    // Reset inputs
    setDisplayName("");
    setDescription("");
    setAvatarFile(null);
    setAvatarPreview(null);
    setExistingAvatarCid(null);

    setIncludeRawWords([]);
    setIncludeRawInput("");
    setIncludeRawMode("OR");
    setIncludeWords([]);
    setIncludeInput("");
    setExcludeRawWords([]);
    setExcludeRawInput("");
    setExcludeWords([]);
    setExcludeInput("");
    setTags([]);
    setTagsInput("");
    setLangs("");
    setReplyFilter("all");
    setImagesFilter("all");
    setVideoFilter("all");
    setExternalFilter("all");
    setLabelsFilter("all");
    setSourceType("all");
    setSourceUserDid("");
    setSourceUserHandle("");
    setSelectedActor(null);
    setActorSuggestions([]);
    setStep(1);
    setIsAdvanced(false);
    setRawCondition("");
    setCurrentView("list");
  };

  // Parse condition query back to Form States
  const parseQueryToForm = (query: string) => {
    try {
      // Reset builder form states
      setIncludeRawWords([]);
      setIncludeRawInput("");
      setIncludeRawMode("OR");
      setIncludeWords([]);
      setIncludeInput("");
      setIncludeMode("OR");
      setExcludeRawWords([]);
      setExcludeRawInput("");
      setExcludeWords([]);
      setExcludeInput("");
      setTags([]);
      setTagsInput("");
      setLangs("");
      setReplyFilter("all");
      setImagesFilter("all");
      setVideoFilter("all");
      setExternalFilter("all");
      setLabelsFilter("all");
      setSourceType("all");
      setSourceUserDid("");
      setSourceUserHandle("");
      setSelectedActor(null);
      setActorSuggestions([]);
      setStep(1);
      setIsAdvanced(false);
      setRawCondition(query);

      // Normalize line endings and whitespace
      const normalizedQuery = query.replace(/\r\n/g, "\n").trim();
      
      // Parse source block
      const sourceMatch = normalizedQuery.match(/source\s*\{\s*([\s\S]*?)\s*\}/);
      let parsedSourceType: "all" | "me" | "user" = "all";
      let parsedSourceDid = "";
      if (sourceMatch) {
        const sourceBody = sourceMatch[1].trim();
        if (sourceBody.startsWith("postedBy")) {
          if (sourceBody.includes("$me")) {
            parsedSourceType = "me";
          } else {
            const didMatch = sourceBody.match(/postedBy\(\s*["'](.*?)["']/);
            if (didMatch) {
              parsedSourceType = "user";
              parsedSourceDid = didMatch[1];
            }
          }
        }
      }
      setSourceType(parsedSourceType);
      setSourceUserDid(parsedSourceDid);

      let simpleQueryText = "source {\n  all(newest)\n}";
      if (parsedSourceType === "me") {
        simpleQueryText = "source {\n  postedBy($me, newest)\n}";
      } else if (parsedSourceType === "user" && parsedSourceDid) {
        simpleQueryText = `source {\n  postedBy("${parsedSourceDid}", newest)\n}`;
      }
      
      if (!normalizedQuery || normalizedQuery === simpleQueryText) {
        return;
      }

      // Check if it matches the filter structure
      const filterMatch = normalizedQuery.match(/filter\s*\{\s*([\s\S]*?)\s*\}/);
      if (!filterMatch) {
        // If there is no 'filter' section at all, it's a simple query (no filters)
        if (!normalizedQuery.includes("filter")) {
          return;
        }
        setIsAdvanced(true);
        return;
      }

      const filterBody = filterMatch[1].trim();
      if (!filterBody) {
        return;
      }

      // Split clauses by 'and'
      const clauses = filterBody.split(/\s+and\s+/);
      let isParsable = true;

      for (const clause of clauses) {
        const trimmedClause = clause.trim();

        // 1. Single or multiple OR tags
        let tagMatch = false;
        
        // 1a. Old format: facet.features.tags containsAny ["tag1", "tag2"]
        const oldTagsMatch = trimmedClause.match(/^facet\.features\.tags\s+containsAny\s+(\[[\s\S]*?\])$/);
        if (oldTagsMatch) {
          try {
            const jsonStr = oldTagsMatch[1].replace(/'/g, '"');
            const parsedTags = JSON.parse(jsonStr);
            const cleanTags = parsedTags.map((t: string) => t.startsWith("#") ? t.slice(1) : t);
            setTags(cleanTags);
            tagMatch = true;
          } catch (e) {
            console.warn("Failed to parse old tags JSON:", e);
          }
        }

        // 1b. Old format: facet.features.tags contains "tag"
        if (!tagMatch) {
          const oldTagMatch = trimmedClause.match(/^facet\.features\.tags\s+contains\s+["'](.*?)["']$/);
          if (oldTagMatch) {
            const t = oldTagMatch[1];
            const cleanTag = t.startsWith("#") ? t.slice(1) : t;
            setTags([cleanTag]);
            tagMatch = true;
          }
        }

        // 1c. New format: text.raw contains "#tag" (grouped by OR)
        if (!tagMatch && trimmedClause.startsWith("(") && trimmedClause.endsWith(")")) {
          const inner = trimmedClause.slice(1, -1).trim();
          const subClauses = inner.split(/\s+or\s+/);
          const potentialTags: string[] = [];
          let allTags = true;
          for (const sc of subClauses) {
            const match = sc.trim().match(/^text\.raw\s+contains\s+["'](#.*?)["']$/);
            if (match) {
              potentialTags.push(match[1].slice(1));
            } else {
              allTags = false;
              break;
            }
          }
          if (allTags && potentialTags.length > 0) {
            setTags(potentialTags);
            tagMatch = true;
          }
        }

        // 1d. New format: text.raw contains "#tag" (single)
        if (!tagMatch) {
          const match = trimmedClause.match(/^text\.raw\s+contains\s+["'](#.*?)["']$/);
          if (match) {
            setTags([match[1].slice(1)]);
            tagMatch = true;
          }
        }
        if (tagMatch) continue;

        // 2. Include Raw words (text.raw contains "...")
        let includeRawMatch = false;
        if (trimmedClause.startsWith("(") && trimmedClause.endsWith(")")) {
          const inner = trimmedClause.slice(1, -1).trim();
          const isOr = inner.includes(" or ");
          const isAnd = inner.includes(" and ");
          if (isOr !== isAnd) {
            const splitOp = isOr ? /\s+or\s+/ : /\s+and\s+/;
            const subClauses = inner.split(splitOp);
            const words: string[] = [];
            let allMatch = true;
            for (const sc of subClauses) {
              const match = sc.trim().match(/^text\.raw\s+contains\s+["'](.*?)["']$/);
              if (match && !match[1].startsWith("#")) {
                words.push(match[1]);
              } else {
                allMatch = false;
                break;
              }
            }
            if (allMatch && words.length > 0) {
              setIncludeRawWords(words);
              setIncludeRawMode(isOr ? "OR" : "AND");
              includeRawMatch = true;
            }
          }
        } else {
          const match = trimmedClause.match(/^text\.raw\s+contains\s+["'](.*?)["']$/);
          if (match && !match[1].startsWith("#")) {
            setIncludeRawWords([match[1]]);
            setIncludeRawMode("OR");
            includeRawMatch = true;
          }
        }
        if (includeRawMatch) continue;

        // 3. Exclude Raw words (not text.raw contains "...")
        const excludeRawMatch = trimmedClause.match(/^not\s*\(text\.raw\s+contains\s+["'](.*?)["']\)$/);
        if (excludeRawMatch) {
          setExcludeRawWords(prev => {
            if (prev.includes(excludeRawMatch[1])) return prev;
            return [...prev, excludeRawMatch[1]];
          });
          continue;
        }

        // 4. Include words (containsAny)
        const includeAnyMatch = trimmedClause.match(/^text\s+containsAny\s+(\[[\s\S]*?\])$/);
        if (includeAnyMatch) {
          const jsonStr = includeAnyMatch[1].replace(/'/g, '"');
          const words = JSON.parse(jsonStr);
          setIncludeWords(words);
          setIncludeMode("OR");
          continue;
        }

        // 5. Include words (containsAll)
        const includeAllMatch = trimmedClause.match(/^text\s+containsAll\s+(\[[\s\S]*?\])$/);
        if (includeAllMatch) {
          const jsonStr = includeAllMatch[1].replace(/'/g, '"');
          const words = JSON.parse(jsonStr);
          setIncludeWords(words);
          setIncludeMode("AND");
          continue;
        }

        // 6. Exclude words (not containsAny)
        const excludeMatch = trimmedClause.match(/^not\s*\(text\s+containsAny\s+(\[[\s\S]*?\])\)$/);
        if (excludeMatch) {
          const jsonStr = excludeMatch[1].replace(/'/g, '"');
          const words = JSON.parse(jsonStr);
          setExcludeWords(words);
          continue;
        }

        // 7. Languages
        const langMatch = trimmedClause.match(/^langs\s+containsAny\s+(\[[\s\S]*?\])$/);
        if (langMatch) {
          const jsonStr = langMatch[1].replace(/'/g, '"');
          const parsedLangs = JSON.parse(jsonStr);
          setLangs(parsedLangs.join(", "));
          continue;
        }

        // 8. Reply
        if (trimmedClause === "reply exists") {
          setReplyFilter("only");
          continue;
        }
        if (trimmedClause === "not (reply exists)") {
          setReplyFilter("exclude");
          continue;
        }

        // 9. Images
        if (trimmedClause === "embed.images exists") {
          setImagesFilter("only");
          continue;
        }
        if (trimmedClause === "not (embed.images exists)") {
          setImagesFilter("exclude");
          continue;
        }

        // 10. Video
        if (trimmedClause === "embed.video exists") {
          setVideoFilter("only");
          continue;
        }
        if (trimmedClause === "not (embed.video exists)") {
          setVideoFilter("exclude");
          continue;
        }

        // 11. External
        if (trimmedClause === "embed.external exists") {
          setExternalFilter("only");
          continue;
        }
        if (trimmedClause === "not (embed.external exists)") {
          setExternalFilter("exclude");
          continue;
        }

        // 12. Labels
        if (trimmedClause === "labels exists") {
          setLabelsFilter("only");
          continue;
        }
        if (trimmedClause === "not (labels exists)") {
          setLabelsFilter("exclude");
          continue;
        }

        // If any clause does not match standard fields, fallback to advanced editor
        isParsable = false;
        break;
      }

      if (!isParsable) {
        setIsAdvanced(true);
      }
    } catch (e) {
      console.error("Query parse failed, switching to advanced mode:", e);
      setIsAdvanced(true);
    }
  };

  // Login handler (Redirects to oauth/login)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginHandle.trim()) {
      toast.error("ハンドル名を入力してください。");
      return;
    }

    setIsLoggingIn(true);
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const loginUrl = `${apiBaseUrl}/oauth/login?handle=${encodeURIComponent(loginHandle.trim())}&redirect=${encodeURIComponent(origin + "/")}`;
    
    toast.loading("Blueskyの認証画面に移動しています...");
    window.location.href = loginUrl;
  };

  // Login with @passport handler (Redirects to atpassport.net)
  const handleAtPassportLogin = () => {
    setIsLoggingInWithAtPassport(true);
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const callbackUrl = `${origin}/api/auth/atpassport/callback`;
    const targetUrl = `https://atpassport.net/authentication?callback=${encodeURIComponent(callbackUrl)}`;
    
    toast.loading("@passportに移動しています...");
    window.location.href = targetUrl;
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/oauth/logout`, {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        setIsAuthenticated(false);
        setUser(null);
        setFeeds([]);
        toast.success("ログアウトしました。");
      } else {
        toast.error("ログアウト処理に失敗しました。");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("通信エラーが発生しました。");
    }
  };

  // Step 1 Validation & Go to Step 2
  const handleNextStep = async () => {
    if (!isAdvanced) {
      const hasRawWords = includeRawWords.length > 0 || includeRawInput.trim().length > 0;
      const hasWords = includeWords.length > 0 || includeInput.trim().length > 0;
      const hasTags = tags.length > 0 || tagsInput.trim().length > 0;
      
      if (!hasRawWords && !hasWords && !hasTags) {
        toast.error("「含める単語（部分一致）」、「含める単語（単語一致）」、「タグ」のいずれか1つ以上を入力してください。");
        return;
      }

      if (sourceType === "user") {
        let currentDid = sourceUserDid;
        if (!currentDid.trim() && sourceUserHandle.trim()) {
          const loadingResolve = toast.loading("ハンドル名からDIDを解決中...");
          const resolved = await resolveHandleToDid(sourceUserHandle);
          toast.dismiss(loadingResolve);
          if (resolved) {
            currentDid = resolved;
          } else {
            toast.error("指定されたハンドル名が見つかりませんでした。");
            return;
          }
        }
        if (!currentDid.trim()) {
          toast.error("特定のユーザーのハンドル名を入力してください。");
          return;
        }
      }
    }
    // タッチデバイス等のゴーストクリック（突き抜け）を防止するため、非同期でステップ遷移を行う
    setTimeout(() => {
      setStep(2);
    }, 50);
  };

  // Deploy (create/update) Feed Handler
  const handleDeployFeed = async (e: React.FormEvent) => {
    e.preventDefault();

    // ステップ1の状態で送信が走るのを完全に防止
    if (step !== 2) {
      setStep(2);
      return;
    }

    if (!rkey.trim()) {
      toast.error("レコードキー (rkey) を入力してください。");
      setStep(2);
      return;
    }

    if (!displayName.trim()) {
      toast.error("表示名を入力してください。");
      setStep(2);
      return;
    }

    // Validate rkey syntax
    const rkeyRegex = /^[a-zA-Z0-9.-]+$/;
    if (!rkeyRegex.test(rkey.trim())) {
      toast.error("レコードキーは半角英数字、ドット(.)、ハイフン(-)のみ使用できます。");
      setStep(2);
      return;
    }

    if (!isAdvanced) {
      const hasRawWords = includeRawWords.length > 0 || includeRawInput.trim().length > 0;
      const hasWords = includeWords.length > 0 || includeInput.trim().length > 0;
      const hasTags = tags.length > 0 || tagsInput.trim().length > 0;
      
      if (!hasRawWords && !hasWords && !hasTags) {
        toast.error("「含める単語（部分一致）」、「含める単語（単語一致）」、「タグ」のいずれか1つ以上を入力してください。");
        setStep(1);
        return;
      }

      if (sourceType === "user") {
        let currentDid = sourceUserDid;
        if (!currentDid.trim() && sourceUserHandle.trim()) {
          const resolved = await resolveHandleToDid(sourceUserHandle);
          if (resolved) currentDid = resolved;
        }
        if (!currentDid.trim()) {
          toast.error("特定のユーザーのハンドル名を入力してください。");
          setStep(1);
          return;
        }
      }
    }

    const finalCondition = isAdvanced ? rawCondition : generatedCondition;
    if (!finalCondition.trim()) {
      toast.error("条件式が空です。");
      return;
    }

    setIsDeploying(true);
    const loadingToast = toast.loading("フィードを準備中...");

    try {
      // 1. Upload Avatar if new file is selected
      let blobObj: any = null;

      if (avatarFile) {
        toast.loading("アバター画像をアップロード中...", { id: loadingToast });
        const uploadResponse = await fetch(`${apiBaseUrl}/api/upload_blob`, {
          method: "POST",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": avatarFile.type || "application/octet-stream",
          },
          credentials: "include",
          body: avatarFile,
        });

        if (!uploadResponse.ok) {
          throw new Error("アバター画像のアップロードに失敗しました。");
        }

        const uploadData = await uploadResponse.json();
        if (uploadData.blob) {
          blobObj = uploadData.blob;
        } else {
          throw new Error("アバター画像アップロードのレスポンスが不正です。");
        }
      } else if (existingAvatarCid) {
        const matchingFeed = feeds.find(f => f.rkey === rkey.trim());
        if (matchingFeed && matchingFeed.avatarCid) {
          blobObj = {
            "$type": "blob",
            "ref": {
              "$link": matchingFeed.avatarCid
            },
            "mimeType": matchingFeed.avatarMimeType || "image/png",
            "size": matchingFeed.avatarSize || 0
          };
        }
      }

      // 2. Deploy backend logic to /fg/put
      toast.loading("抽出ロジックを反映中...", { id: loadingToast });
      const fgResponse = await fetch(`${apiBaseUrl}/fg/put`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        credentials: "include",
        body: JSON.stringify({
          type: feedType,
          rkey: rkey.trim(),
          condition: finalCondition,
        }),
      });

      if (!fgResponse.ok) {
        const errData = await fgResponse.json();
        throw new Error(errData.error || "抽出ロジックの反映に失敗しました。");
      }

      // 3. Declare Feed to PDS via /api/put_record
      toast.loading("Blueskyネットワークに登録中...", { id: loadingToast });
      const matchingFeed = feeds.find(f => f.rkey === rkey.trim());
      const recordCreatedAt = matchingFeed?.createdAt || new Date().toISOString();

      const recordBody: any = {
        repo: user?.did,
        collection: "app.bsky.feed.generator",
        rkey: rkey.trim(),
        record: {
          "$type": "app.bsky.feed.generator",
          did: "did:web:fg.shigepon.net", // backend feed generator DID (fixed)
          displayName: displayName.trim(),
          description: description.trim() || undefined,
          createdAt: recordCreatedAt,
        }
      };

      if (blobObj) {
        recordBody.record.avatar = blobObj;
      }

      const pdsResponse = await fetch(`${apiBaseUrl}/api/put_record`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        credentials: "include",
        body: JSON.stringify(recordBody),
      });

      if (!pdsResponse.ok) {
        const errData = await pdsResponse.json();
        throw new Error(errData.error || errData.message || "PDSレコードの登録に失敗しました。");
      }

      toast.dismiss(loadingToast);
      toast.success(isEditing ? "フィードの更新に成功しました！" : "フィードの反映に成功しました！");



      // Reset Form & reload list
      handleCancelEdit();
      loadFeeds();
    } catch (error: any) {
      toast.dismiss(loadingToast);
      console.error("Deploy feed error:", error);
      toast.error(error.message || "通信エラーにより反映に失敗しました。");
    } finally {
      setIsDeploying(false);
    }
  };

  // Delete Feed Handler
  const handleDeleteFeed = async (feedRkey: string) => {
    setIsDeleting(feedRkey);
    const loadingToast = toast.loading(`フィード「${feedRkey}」を削除中...`);
    try {
      // 1. Delete backend logic
      const fgResponse = await fetch(`${apiBaseUrl}/fg/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        credentials: "include",
        body: JSON.stringify({
          rkey: feedRkey,
        }),
      });

      if (!fgResponse.ok) {
        const errData = await fgResponse.json();
        throw new Error(errData.error || "抽出ロジックの削除に失敗しました。");
      }

      // 2. Delete PDS Record
      if (user?.did) {
        const pdsResponse = await fetch(`${apiBaseUrl}/api/delete_record`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          credentials: "include",
          body: JSON.stringify({
            repo: user.did,
            collection: "app.bsky.feed.generator",
            rkey: feedRkey,
          }),
        });

        if (!pdsResponse.ok) {
          console.warn("Failed to delete PDS record, but backend logic was deleted.");
        }
      }

      toast.dismiss(loadingToast);
      toast.success(`フィード「${feedRkey}」を削除しました。`);
      loadFeeds();
    } catch (error: any) {
      toast.dismiss(loadingToast);
      console.error("Delete feed error:", error);
      toast.error(error.message || "通信エラーにより削除に失敗しました。");
    } finally {
      setIsDeleting(null);
    }
  };

  // Save Settings Base URL
  const handleSaveSettings = () => {
    let cleanUrl = tempApiBaseUrl.trim();
    if (cleanUrl.endsWith("/")) {
      cleanUrl = cleanUrl.slice(0, -1);
    }
    
    setApiBaseUrl(cleanUrl);
    if (typeof window !== "undefined") {
      localStorage.setItem("rito_feed_editor_api_base", cleanUrl);
    }
    setIsSettingsOpen(false);
    toast.success("APIサーバーの設定を更新しました。");
  };

  // Render loading screen during server pre-rendering or hydration
  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0b0f19] flex flex-col items-center justify-center gap-3">
        <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
        <p className="text-xs text-slate-400 font-mono">初期化中...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col font-sans select-none text-slate-100 bg-[#0b0f19] relative overflow-hidden">
      {/* Background glowing particles (Glassmorphism aesthetics) */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* HEADER */}
      <header className="border-b border-slate-900/60 bg-slate-950/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 p-[1px]">
              <div className="w-full h-full bg-[#0f1624] flex items-center justify-center rounded-lg">
                <span className="text-blue-400 font-bold text-base leading-none">#</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Rito Feed Editor
              </h1>
              <p className="text-[10px] text-slate-500 -mt-1 font-mono">Bluesky Custom Feed builder</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Help link */}
            <Link
              href="/help"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 transition-colors"
              title="使い方"
            >
              <BookOpen className="w-4 h-4" />
            </Link>

            {/* Settings Dialog */}
            <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
              <DialogTrigger render={
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-100 hover:bg-slate-900/50">
                  <Settings className="w-4 h-4" />
                </Button>
              } />
              <DialogContent className="bg-slate-950 border-slate-800 text-slate-100 max-w-sm rounded-xl">
                <DialogHeader>
                  <DialogTitle className="text-lg font-bold">Blueskyカスタムフィード作成ツールのAPI接続設定</DialogTitle>
                  <DialogDescription className="text-slate-400 text-xs">
                    Blueskyカスタムフィード作成ツールのAPIのベースURLを指定します。
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="api-url" className="text-xs text-slate-300 font-medium">接続先URL</Label>
                    <Input
                      id="api-url"
                      type="url"
                      value={tempApiBaseUrl}
                      onChange={(e) => setTempApiBaseUrl(e.target.value)}
                      placeholder="https://fg.shigepon.net"
                      className="bg-slate-900/60 border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:ring-blue-500/50"
                    />
                  </div>
                  <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-900 flex gap-2">
                    <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-slate-400 leading-normal">
                      ローカルで実行している場合は `http://localhost:3000` などのエンドポイントを指定してください。
                    </p>
                  </div>
                </div>
                <DialogFooter className="flex sm:justify-end gap-2">
                  <Button variant="ghost" className="text-slate-400 hover:bg-slate-900" onClick={() => setIsSettingsOpen(false)}>
                    キャンセル
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white" onClick={handleSaveSettings}>
                    設定を保存
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {isAuthenticated && user && (
              <div className="flex items-center gap-4 pl-2 border-l border-slate-900">
                <div className="hidden md:flex flex-col text-right">
                  <span className="text-xs font-semibold text-slate-200">@{user.handle}</span>
                  <span className="text-[9px] text-slate-500 font-mono truncate max-w-[150px]" title={user.did}>
                    {user.did.substring(0, 15)}...
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleLogout} 
                  className="text-rose-400 hover:text-rose-300 hover:bg-rose-950/20 gap-1.5 px-3 rounded-lg"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-xs">ログアウト</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 flex flex-col justify-start">
        {isLoadingSession ? (
          /* Loading State */
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
            <p className="text-xs text-slate-400 font-mono">セッションを検証中...</p>
          </div>
        ) : !isAuthenticated ? (
          /* LOGIN SCREEN */
          <div className="max-w-md w-full mx-auto my-auto py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="bg-slate-950/40 backdrop-blur-xl border-slate-800/80 shadow-[0_0_50px_rgba(34,139,230,0.03)] rounded-2xl relative overflow-hidden">
              {/* Card glowing borders */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              
              <CardHeader className="text-center pt-8">
                <div className="mx-auto w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-2xl font-bold tracking-tight text-white">Rito Feed Editorにログイン</CardTitle>
                <CardDescription className="text-slate-400 text-xs">
                  Blueskyアカウントのフィード情報を取得・管理します
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6 px-8 pb-8">
                {/* @passport button (Primary focus) */}
                <div className="space-y-3">
                  <Button 
                    onClick={handleAtPassportLogin}
                    type="button"
                    disabled={isLoggingIn || isLoggingInWithAtPassport}
                    className="w-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-medium shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.45)] transition-all duration-300 py-6 rounded-xl flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoggingInWithAtPassport ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <AtPassportIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" size={16} />
                    )}
                    {AtPassportUI.ja.title}
                  </Button>
                  <p className="text-[11px] text-slate-400 leading-normal text-center px-1">
                    ハンドルをこのサービス上で入力することなく、安全にログインできます。
                  </p>
                </div>

                <div className="relative flex items-center justify-center py-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-800/80" />
                  </div>
                  <span className="relative bg-[#0b0c13] px-3 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                    またはハンドルを入力
                  </span>
                </div>

                {/* Normal Handle input */}
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="handle" className="text-xs text-slate-300 font-medium">Bluesky ハンドル名</Label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-slate-500 text-sm select-none">@</span>
                      <Input
                        id="handle"
                        type="text"
                        value={loginHandle}
                        onChange={(e) => setLoginHandle(e.target.value)}
                        placeholder="alice.bsky.social"
                        required
                        disabled={isLoggingIn || isLoggingInWithAtPassport}
                        className="bg-slate-900/40 border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:ring-violet-500/50 py-5 pl-9 pr-10 rounded-xl w-full disabled:opacity-60 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoggingIn || isLoggingInWithAtPassport}
                    variant="secondary"
                    className="w-full bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-100 py-5 rounded-xl font-medium transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoggingIn ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      "atprotoアカウントでログイン"
                    )}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="bg-slate-950/80 border-t border-slate-900/60 p-4 justify-center">
                <a 
                  href="https://atpassport.net/ja/about" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] text-slate-500 hover:text-slate-300 flex items-center gap-1 group font-mono"
                >
                  <BookOpen className="w-3 h-3" />
                  @passport について調べる
                  <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </CardFooter>
            </Card>
          </div>
        ) : currentView === "list" ? (
          /* LIST VIEW */
          <div className="space-y-6 w-full animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">登録済みフィード一覧</h2>
                <p className="text-xs text-slate-400">
                  現在登録されているカスタムフィードの管理と新規作成を行えます
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={loadFeeds}
                  disabled={isLoadingFeeds}
                  className="border-slate-800 bg-slate-900/40 text-xs text-slate-300 hover:text-white"
                >
                  <RefreshCw className={`w-3.5 h-3.5 mr-1.5 ${isLoadingFeeds ? "animate-spin" : ""}`} />
                  一覧を更新
                </Button>
                <Button
                  onClick={handleStartCreate}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white text-xs font-semibold py-5 px-4 rounded-xl shadow-[0_0_20px_rgba(34,139,230,0.25)] hover:shadow-lg transition-all duration-300 flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  新規フィード作成
                </Button>
              </div>
            </div>

            {isLoadingFeeds && feeds.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 gap-3">
                <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
                <p className="text-xs text-slate-400 font-mono">読み込み中...</p>
              </div>
            ) : feeds.length === 0 ? (
              <div className="text-center py-24 border border-dashed border-slate-800 rounded-2xl bg-slate-950/10">
                <Compass className="w-12 h-12 text-slate-700 mx-auto mb-4 animate-pulse" />
                <p className="text-base font-semibold text-slate-300">フィードが登録されていません</p>
                <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto">
                  カスタムフィードを作成してBlueskyに反映してみましょう！
                </p>
                <Button
                  onClick={handleStartCreate}
                  className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white text-xs font-semibold py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(34,139,230,0.2)] hover:shadow-lg transition-all duration-300"
                >
                  最初のフィードを作成する
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {feeds.map((feed) => {
                  const isSearch = !!feed.search;
                  const queryText = feed.search || feed.filter || "";
                  
                  return (
                    <Card 
                      key={feed.rkey}
                      className="bg-slate-950/40 backdrop-blur-xl border-slate-800/80 hover:border-slate-700/80 shadow-xl hover:shadow-[0_0_30px_rgba(34,139,230,0.05)] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group h-full relative"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <CardHeader className="p-5 pb-3 shrink-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            {feed.avatarCid ? (
                              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-slate-800">
                                <img 
                                  src={`${apiBaseUrl}/api/get_blob?did=${encodeURIComponent(feed.repo)}&cid=${encodeURIComponent(feed.avatarCid)}`} 
                                  alt={feed.displayName || feed.rkey} 
                                  className="w-full h-full object-cover"
                                  crossOrigin="use-credentials"
                                />
                              </div>
                            ) : (
                              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-slate-800 flex items-center justify-center">
                                <Compass className="w-5 h-5 text-slate-500" />
                              </div>
                            )}
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <h3 className="font-bold text-slate-200 text-sm truncate max-w-[120px] sm:max-w-[150px]" title={feed.displayName || feed.rkey}>
                                  {feed.displayName || feed.rkey}
                                </h3>
                                <Badge 
                                  variant="secondary" 
                                  className={`text-[8px] px-1.5 py-0.5 rounded font-mono ${
                                    isSearch 
                                      ? "bg-blue-950/60 border border-blue-800/40 text-blue-400" 
                                      : "bg-slate-900 border border-slate-800 text-slate-400"
                                  }`}
                                >
                                  {isSearch ? "Search" : "Filter"}
                                </Badge>
                              </div>
                              <p className="text-[9px] text-slate-500 font-mono truncate max-w-[160px]" title={feed.rkey}>
                                key: {feed.rkey}
                              </p>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-1 shrink-0">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="w-7 h-7 rounded-lg text-amber-400 hover:text-amber-300 hover:bg-amber-950/20"
                              onClick={() => handleStartEdit(feed)}
                              title="編集"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="w-7 h-7 rounded-lg text-blue-400 hover:text-blue-300 hover:bg-blue-950/20"
                              onClick={() => {
                                const url = `https://bsky.app/profile/${feed.repo}/feed/${feed.rkey}`;
                                window.open(url, "_blank");
                              }}
                              title="Blueskyで試す"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="w-7 h-7 rounded-lg text-rose-400 hover:text-rose-300 hover:bg-rose-950/20"
                              onClick={() => {
                                setFeedToDelete(feed.rkey);
                                setDeleteConfirmOpen(true);
                              }}
                              disabled={isDeleting === feed.rkey}
                              title="削除"
                            >
                              {isDeleting === feed.rkey ? (
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                <Trash2 className="w-3.5 h-3.5" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-5 pt-0 pb-5 flex-1 flex flex-col justify-between gap-4">
                        {feed.description ? (
                          <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed bg-slate-900/20 p-3 rounded-xl border border-slate-900/50 flex-1">
                            {feed.description}
                          </p>
                        ) : (
                          <div className="text-[11px] italic text-slate-600 bg-slate-900/10 p-3 rounded-xl border border-dashed border-slate-900 flex-1 flex items-center justify-center">
                            説明はありません
                          </div>
                        )}

                        <div className="bg-[#030408]/60 p-3 rounded-xl border border-[#0d0e15] font-mono text-[9px] text-slate-400 max-h-24 overflow-y-auto whitespace-pre-wrap select-text leading-relaxed shrink-0">
                          {queryText}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* CREATE / EDIT FORM VIEW */
          <div className="max-w-2xl w-full mx-auto space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCancelEdit}
                className="text-slate-400 hover:text-slate-200 gap-1.5 px-3 rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                一覧に戻る
              </Button>
            </div>

            <Card className="bg-slate-950/40 backdrop-blur-xl border-slate-800/80 shadow-2xl rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center justify-between">
                  <span>{isEditing ? `フィードの編集: ${editingRkey}` : "新規カスタムフィードの作成"}</span>
                  <div className="flex items-center gap-2">
                    {step === 1 && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setIsAdvanced(!isAdvanced)}
                        className="border-slate-800 bg-slate-900/40 text-[11px] px-2.5 h-8 text-slate-300 hover:text-white"
                      >
                        <Sliders className="w-3 h-3 mr-1.5" />
                        {isAdvanced ? "フォーム入力" : "クエリ直接編集"}
                      </Button>
                    )}
                  </div>
                </CardTitle>
                <CardDescription className="text-slate-400 text-xs">
                  {isEditing 
                    ? "既存フィードの条件を変更し、再度反映（上書き更新）します。"
                    : isAdvanced 
                      ? "直接クエリ条件式を記述して高度な設定でフィードを反映します。"
                      : "含める単語や条件指定から自動でクエリを構築し、ステップに沿って反映します。"
                  }
                </CardDescription>
              </CardHeader>
              
              <form onSubmit={handleDeployFeed}>
                <CardContent className="space-y-6">
                  {/* Stepper Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-900/60 mb-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step === 1 ? "bg-blue-600 text-white shadow-[0_0_10px_rgba(34,139,230,0.4)]" : "bg-slate-900 text-slate-500"}`}>
                        1
                      </div>
                      <span className={`text-xs font-semibold ${step === 1 ? "text-blue-400" : "text-slate-500"}`}>検索条件</span>
                    </div>
                    
                    <div className="flex-1 h-[1px] bg-slate-900 mx-4" />
                    
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step === 2 ? "bg-blue-600 text-white shadow-[0_0_10px_rgba(34,139,230,0.4)]" : "bg-slate-900 text-slate-500"}`}>
                        2
                      </div>
                      <span className={`text-xs font-semibold ${step === 2 ? "text-blue-400" : "text-slate-500"}`}>フィード設定</span>
                    </div>
                  </div>

                  {isAdvanced ? (
                    /* ADVANCED QUERY MODE */
                    <div className="space-y-4">
                      {step === 1 ? (
                        /* STEP 1: QUERY TEXTAREA */
                        <div className="space-y-4 animate-in fade-in duration-300">
                          <div className="space-y-2">
                            <Label htmlFor="raw-condition" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              <FileText className="w-3.5 h-3.5 text-amber-400" />
                              クエリ条件式 (condition)
                            </Label>
                            <textarea
                              id="raw-condition"
                              value={rawCondition}
                              onChange={(e) => setRawCondition(e.target.value)}
                              rows={8}
                              placeholder={`source {\n  all(newest)\n}\nfilter {\n  text containsAny ["猫"]\n}`}
                              className="w-full bg-slate-900/60 border border-slate-800 rounded-xl p-3 font-mono text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 resize-none select-text"
                            />
                          </div>
                          <div className="bg-slate-900/20 border border-slate-900 p-3 rounded-lg flex gap-2">
                            <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <div className="text-[10px] text-slate-400 leading-normal space-y-1">
                              <p>検索型クエリは `source` セクションと `filter` セクションで記述します。</p>
                              <p>ダブルクォーテーションが含まれる場合はエスケープするか、配列形式 `["単語"]` をご利用ください。</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* STEP 2: FEED METADATA FOR ADVANCED MODE */
                        <div className="space-y-5 animate-in fade-in duration-300">
                          {/* Record Key (rkey) */}
                          <div className="space-y-2">
                            <Label htmlFor="rkey" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              レコードキー (rkey)
                              <Badge variant="outline" className="text-[9px] py-0 border-amber-900/60 text-amber-500 font-mono">必須</Badge>
                            </Label>
                            <Input
                              id="rkey"
                              type="text"
                              value={rkey}
                              onChange={(e) => setRkey(e.target.value)}
                              placeholder="例: my-cat-feed (URLの一部になります。変更不可)"
                              required
                              disabled={isEditing}
                              className="bg-slate-900/60 border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:ring-blue-500/50 py-5 rounded-xl disabled:opacity-60"
                            />
                          </div>

                          {/* Display Name */}
                          <div className="space-y-2">
                            <Label htmlFor="display-name" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              表示名
                              <Badge variant="outline" className="text-[9px] py-0 border-amber-900/60 text-amber-500 font-mono">必須</Badge>
                            </Label>
                            <Input
                              id="display-name"
                              type="text"
                              value={displayName}
                              onChange={(e) => setDisplayName(e.target.value)}
                              placeholder="例: ねこフィード"
                              required
                              className="bg-slate-900/60 border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:ring-blue-500/50 py-5 rounded-xl"
                            />
                          </div>

                          {/* Description */}
                          <div className="space-y-2">
                            <Label htmlFor="description" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              説明
                            </Label>
                            <textarea
                              id="description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              rows={3}
                              placeholder="例: 猫に関する投稿を集めたフィードです。"
                              className="w-full bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 resize-none select-text"
                            />
                          </div>

                          {/* Avatar Image Selection */}
                          <div className="space-y-2">
                            <Label htmlFor="avatar" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              アバター画像
                            </Label>
                            <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-900 p-4 rounded-xl">
                              <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                                {avatarPreview ? (
                                  <img src={avatarPreview} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                  <Compass className="w-8 h-8 text-slate-600 animate-pulse" />
                                )}
                              </div>
                              <div className="space-y-2 flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <Input
                                    id="avatar"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) {
                                        setAvatarFile(file);
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                          setAvatarPreview(reader.result as string);
                                        };
                                        reader.readAsDataURL(file);
                                      }
                                    }}
                                    className="bg-slate-950 border-slate-800 text-slate-300 text-xs file:bg-slate-900 file:text-slate-300 file:border-0 file:rounded-md file:px-2 file:py-1 cursor-pointer h-10 py-1.5"
                                  />
                                  {(avatarPreview || avatarFile || existingAvatarCid) && (
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      onClick={() => {
                                        setAvatarFile(null);
                                        setAvatarPreview(null);
                                        setExistingAvatarCid(null);
                                      }}
                                      className="text-rose-400 hover:text-rose-300 hover:bg-rose-950/20 text-xs py-1.5 px-3 rounded-lg shrink-0"
                                    >
                                      画像を削除
                                    </Button>
                                  )}
                                </div>
                                <p className="text-[9px] text-slate-500 leading-normal">
                                  PNG, JPEG, WEBP形式をサポートしています。
                                </p>
                              </div>
                            </div>
                          </div>


                        </div>
                      )}
                    </div>
                  ) : (
                    /* SIMPLE FORM MODE with stepper */
                    <>
                      {step === 1 ? (
                        /* STEP 1: SEARCH CRITERIA */
                        <div className="space-y-5 animate-in fade-in duration-300">
                          {/* Feed Type */}
                          <div className="space-y-2 pb-4 border-b border-slate-900/60">
                            <Label className="text-xs font-semibold text-slate-300">
                              フィードタイプ
                            </Label>
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => setFeedType("Search")}
                                className="flex-1 py-2.5 rounded-xl border text-xs font-medium transition-all bg-blue-950/40 border-blue-800/80 text-blue-400 shadow-[0_0_15px_rgba(34,139,230,0.1)]"
                              >
                                検索型 (Search)
                              </button>
                              <button
                                type="button"
                                disabled
                                className="flex-1 py-2.5 rounded-xl border border-slate-900 bg-slate-950/40 text-slate-600 text-xs font-medium opacity-50 cursor-not-allowed"
                                title="現在開発中につき選択できません"
                              >
                                フィルター型 (Filter) [開発中]
                              </button>
                            </div>
                          </div>
                          {/* Source Selection */}
                          <div className="space-y-2">
                            <Label htmlFor="source-type" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              <Globe className="w-3.5 h-3.5 text-blue-400" />
                              取得元（ソース）
                            </Label>
                            <select
                              id="source-type"
                              value={sourceType}
                              onChange={(e) => setSourceType(e.target.value as "all" | "me" | "user")}
                              className="w-full bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 cursor-pointer"
                            >
                              <option value="all" className="bg-slate-950 text-slate-100">全員の投稿</option>
                              <option value="me" className="bg-slate-950 text-slate-100">あなたの投稿</option>
                              <option value="user" className="bg-slate-950 text-slate-100">特定のユーザーの投稿</option>
                            </select>
                          </div>

                          {sourceType === "user" && (
                            <div className="space-y-2 border-l-2 border-blue-900/60 pl-3 animate-in slide-in-from-left-2 duration-300 relative">
                              <Label htmlFor="source-user-handle" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                                特定のユーザーのハンドル名
                                <Badge variant="outline" className="text-[9px] py-0 border-slate-800 text-slate-400 font-mono">必須</Badge>
                              </Label>
                              <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm select-none">@</span>
                                <Input
                                  id="source-user-handle"
                                  type="text"
                                  value={sourceUserHandle}
                                  onChange={(e) => {
                                    setSourceUserHandle(e.target.value);
                                    if (selectedActor && selectedActor.handle !== e.target.value) {
                                      setSelectedActor(null);
                                      setSourceUserDid("");
                                    }
                                  }}
                                  placeholder="例: alice.bsky.social"
                                  required={sourceType === "user"}
                                  className="bg-slate-900/60 border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:ring-blue-500/50 py-5 pl-9 pr-10 rounded-xl w-full"
                                />
                                {isLoadingActorSuggestions && (
                                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <RefreshCw className="w-3.5 h-3.5 text-blue-400 animate-spin" />
                                  </div>
                                )}
                              </div>

                              {/* Suggestions Dropdown */}
                              {actorSuggestions.length > 0 && (
                                <div className="absolute z-50 left-3 right-0 mt-1 bg-slate-950/95 border border-slate-805 rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto backdrop-blur-xl">
                                  {actorSuggestions.map((actor) => (
                                    <button
                                      key={actor.did}
                                      type="button"
                                      onClick={() => {
                                        setSourceUserDid(actor.did);
                                        setSelectedActor(actor);
                                        setSourceUserHandle(actor.handle);
                                        setActorSuggestions([]);
                                      }}
                                      className="w-full px-4 py-3 text-left hover:bg-slate-900 flex items-center gap-3 transition-colors border-b border-slate-900/60 last:border-0"
                                    >
                                      {actor.avatar ? (
                                        <img src={actor.avatar} alt={actor.handle} className="w-7 h-7 rounded-full bg-slate-850 object-cover" />
                                      ) : (
                                        <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-bold">
                                          {actor.handle.slice(0, 2).toUpperCase()}
                                        </div>
                                      )}
                                      <div className="min-w-0 flex-1">
                                        <div className="text-xs font-semibold text-slate-200 truncate leading-none">
                                          {actor.displayName || actor.handle}
                                        </div>
                                        <div className="text-[10px] text-slate-500 truncate mt-0.5 font-mono">
                                          @{actor.handle}
                                        </div>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              )}

                              {/* Selected Actor Details Card */}
                              {selectedActor && (
                                <div className="mt-2 p-3 bg-blue-950/15 border border-blue-900/30 rounded-xl flex items-center gap-3 animate-in fade-in duration-300">
                                  {selectedActor.avatar ? (
                                    <img src={selectedActor.avatar} alt={selectedActor.handle} className="w-9 h-9 rounded-full bg-slate-800 object-cover border border-blue-900/40" />
                                  ) : (
                                    <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-bold">
                                      {selectedActor.handle.slice(0, 2).toUpperCase()}
                                    </div>
                                  )}
                                  <div className="min-w-0 flex-1">
                                    <div className="text-xs font-semibold text-slate-200 truncate">
                                      {selectedActor.displayName || selectedActor.handle}
                                    </div>
                                    <div className="text-[9px] text-slate-400 font-mono mt-0.5">
                                      {selectedActor.did}
                                    </div>
                                  </div>
                                  <div className="text-[9px] font-bold text-emerald-500 bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
                                    確定
                                  </div>
                                </div>
                              )}

                              <input type="hidden" name="sourceUserDid" value={sourceUserDid} />
                            </div>
                          )}

                          {/* Include Raw Words (部分一致 / text.raw) */}
                          <div className="space-y-2 border-t border-slate-900/60 pt-4">
                            <Label htmlFor="include-raw" className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                                含める単語（部分一致 / 生テキスト）
                                <Badge variant="outline" className="text-[9px] py-0 border-amber-900/60 text-amber-500 font-mono ml-1">いずれか必須</Badge>
                              </span>
                              <div className="flex gap-1">
                                <button
                                  type="button"
                                  onClick={() => setIncludeRawMode("OR")}
                                  className={`text-[10px] font-mono px-2 py-0.5 rounded ${includeRawMode === "OR" ? "bg-blue-950/60 border border-blue-800/40 text-blue-400" : "text-slate-500 hover:text-slate-300"}`}
                                >
                                  いずれか含む (OR)
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setIncludeRawMode("AND")}
                                  className={`text-[10px] font-mono px-2 py-0.5 rounded ${includeRawMode === "AND" ? "bg-blue-950/60 border border-blue-800/40 text-blue-400" : "text-slate-500 hover:text-slate-300"}`}
                                >
                                  すべて含む (AND)
                                </button>
                              </div>
                            </Label>
                            <TagsInput
                              value={includeRawWords}
                              onChange={setIncludeRawWords}
                              inputValue={includeRawInput}
                              onInputValueChange={setIncludeRawInput}
                              placeholder="例: 猫, ねこ (部分一致で検索します。Enter/Space等で確定)"
                              disabled={isDeploying}
                            />
                          </div>

                          {/* Include Words (単語一致 / 形態素) */}
                          <div className="space-y-2 border-l-2 border-blue-900/60 pl-3">
                            <Label htmlFor="include" className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                                含める単語（単語一致 / 形態素）
                                <Badge variant="outline" className="text-[9px] py-0 border-amber-900/60 text-amber-500 font-mono ml-1">いずれか必須</Badge>
                              </span>
                              <div className="flex gap-1">
                                <button
                                  type="button"
                                  onClick={() => setIncludeMode("OR")}
                                  className={`text-[10px] font-mono px-2 py-0.5 rounded ${includeMode === "OR" ? "bg-blue-950/60 border border-blue-800/40 text-blue-400" : "text-slate-500 hover:text-slate-300"}`}
                                >
                                  いずれか含む (OR)
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setIncludeMode("AND")}
                                  className={`text-[10px] font-mono px-2 py-0.5 rounded ${includeMode === "AND" ? "bg-blue-950/60 border border-blue-800/40 text-blue-400" : "text-slate-500 hover:text-slate-300"}`}
                                >
                                  すべて含む (AND)
                                </button>
                              </div>
                            </Label>
                            <TagsInput
                              value={includeWords}
                              onChange={setIncludeWords}
                              inputValue={includeInput}
                              onInputValueChange={setIncludeInput}
                              placeholder="例: 猫, ねこ (形態素の完全一致で検索します。Enter/Space等で確定)"
                              disabled={isDeploying}
                            />
                          </div>



                          {/* Tags (Convert to text.raw contains "#tag") */}
                          <div className="space-y-2 border-t border-slate-900/60 pt-4">
                            <Label htmlFor="tags" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 flex-wrap">
                              <Tags className="w-3.5 h-3.5 text-blue-400" />
                              タグ
                              <Badge variant="outline" className="text-[9px] py-0 border-amber-900/60 text-amber-500 font-mono ml-1">いずれか必須</Badge>
                            </Label>
                            <TagsInput
                              value={tags}
                              onChange={setTags}
                              inputValue={tagsInput}
                              onInputValueChange={setTagsInput}
                              placeholder="例: イラスト, 写真 (Enter, Space, またはカンマ区切り)"
                              disabled={isDeploying}
                            />
                          </div>

                          {/* Languages */}
                          <div className="space-y-2">
                            <Label htmlFor="langs" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              <Globe className="w-3.5 h-3.5 text-blue-400" />
                              言語コード
                            </Label>
                            <Input
                              id="langs"
                              type="text"
                              value={langs}
                              onChange={(e) => setLangs(e.target.value)}
                              placeholder="例: ja (未入力の場合は全言語対象)"
                              className="bg-slate-900/60 border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:ring-blue-500/50 py-5 rounded-xl"
                            />
                          </div>

                          {/* Filters (Reply & Media) */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-900/60 pt-4">
                            {/* Reply Filter */}
                            <div className="space-y-2">
                              <Label htmlFor="reply-filter" className="text-xs font-semibold text-slate-300">
                                返信（リプライ）の扱い
                              </Label>
                              <select
                                id="reply-filter"
                                value={replyFilter}
                                onChange={(e) => setReplyFilter(e.target.value as "all" | "only" | "exclude")}
                                disabled={isDeploying}
                                className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                              >
                                <option value="all">すべて含める</option>
                                <option value="only">返信のみにする</option>
                                <option value="exclude">返信を除外する</option>
                              </select>
                            </div>

                            {/* Images Filter */}
                            <div className="space-y-2">
                              <Label htmlFor="images-filter" className="text-xs font-semibold text-slate-300">
                                画像付き投稿の扱い
                              </Label>
                              <select
                                id="images-filter"
                                value={imagesFilter}
                                onChange={(e) => setImagesFilter(e.target.value as "all" | "only" | "exclude")}
                                disabled={isDeploying}
                                className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                              >
                                <option value="all">すべて含める</option>
                                <option value="only">画像付きのみにする</option>
                                <option value="exclude">画像付きを除外する</option>
                              </select>
                            </div>

                            {/* Video Filter */}
                            <div className="space-y-2">
                              <Label htmlFor="video-filter" className="text-xs font-semibold text-slate-300">
                                動画付き投稿の扱い
                              </Label>
                              <select
                                id="video-filter"
                                value={videoFilter}
                                onChange={(e) => setVideoFilter(e.target.value as "all" | "only" | "exclude")}
                                disabled={isDeploying}
                                className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                              >
                                <option value="all">すべて含める</option>
                                <option value="only">動画付きのみにする</option>
                                <option value="exclude">動画付きを除外する</option>
                              </select>
                            </div>

                            {/* External Link Filter */}
                            <div className="space-y-2">
                              <Label htmlFor="external-filter" className="text-xs font-semibold text-slate-300">
                                リンク（カード）付き投稿の扱い
                              </Label>
                              <select
                                id="external-filter"
                                value={externalFilter}
                                onChange={(e) => setExternalFilter(e.target.value as "all" | "only" | "exclude")}
                                disabled={isDeploying}
                                className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                              >
                                <option value="all">すべて含める</option>
                                <option value="only">リンク付きのみにする</option>
                                <option value="exclude">リンク付きを除外する</option>
                              </select>
                            </div>

                            {/* Labels Filter */}
                            <div className="space-y-2">
                              <Label htmlFor="labels-filter" className="text-xs font-semibold text-slate-300">
                                セルフラベル付き投稿の扱い
                              </Label>
                              <select
                                id="labels-filter"
                                value={labelsFilter}
                                onChange={(e) => setLabelsFilter(e.target.value as "all" | "only" | "exclude")}
                                disabled={isDeploying}
                                className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                              >
                                <option value="all">すべて含める</option>
                                <option value="only">セルフラベル付きのみにする</option>
                                <option value="exclude">セルフラベル付きを除外する</option>
                              </select>
                            </div>
                          </div>

                          {/* Exclude Raw Words (部分一致) */}
                          <div className="space-y-2 border-t border-slate-900/60 pt-4">
                            <Label htmlFor="exclude-raw" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                              除外する単語（部分一致 / 生テキスト）
                            </Label>
                            <TagsInput
                              value={excludeRawWords}
                              onChange={setExcludeRawWords}
                              inputValue={excludeRawInput}
                              onInputValueChange={setExcludeRawInput}
                              placeholder="例: 犬, いぬ (部分一致で除外します。Enter/Space等で確定)"
                              disabled={isDeploying}
                            />
                          </div>

                          {/* Exclude Words (単語一致 / 形態素) */}
                          <div className="space-y-2 border-l-2 border-rose-950/40 pl-3">
                            <Label htmlFor="exclude" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              <AlertCircle className="w-3.5 h-3.5 text-rose-500/80" />
                              除外する単語（単語一致 / 形態素）
                            </Label>
                            <TagsInput
                              value={excludeWords}
                              onChange={setExcludeWords}
                              inputValue={excludeInput}
                              onInputValueChange={setExcludeInput}
                              placeholder="例: 犬, いぬ (形態素の完全一致で除外します。Enter/Space等で確定)"
                              disabled={isDeploying}
                            />
                          </div>

                          {/* Query Live Preview */}
                          <div className="space-y-2 border-t border-slate-900/60 pt-4">
                            <Label className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              生成されるクエリのプレビュー
                            </Label>
                            <pre className="bg-[#030408] border border-slate-900/80 p-3 rounded-lg text-slate-400 font-mono text-[10px] whitespace-pre overflow-x-auto select-text max-h-40">
                              {generatedCondition}
                            </pre>
                          </div>
                        </div>
                      ) : (
                        /* STEP 2: FEED METADATA FOR SIMPLE MODE */
                        <div className="space-y-5 animate-in fade-in duration-300">
                          {/* Record Key (rkey) */}
                          <div className="space-y-2">
                            <Label htmlFor="rkey" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              レコードキー (rkey)
                              <Badge variant="outline" className="text-[9px] py-0 border-amber-900/60 text-amber-500 font-mono">必須</Badge>
                            </Label>
                            <Input
                              id="rkey"
                              type="text"
                              value={rkey}
                              onChange={(e) => setRkey(e.target.value)}
                              placeholder="例: my-cat-feed (URLの一部になります。変更不可)"
                              required
                              disabled={isEditing}
                              className="bg-slate-900/60 border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:ring-blue-500/50 py-5 rounded-xl disabled:opacity-60"
                            />
                          </div>

                          {/* Display Name */}
                          <div className="space-y-2">
                            <Label htmlFor="display-name" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              表示名
                              <Badge variant="outline" className="text-[9px] py-0 border-amber-900/60 text-amber-500 font-mono">必須</Badge>
                            </Label>
                            <Input
                              id="display-name"
                              type="text"
                              value={displayName}
                              onChange={(e) => setDisplayName(e.target.value)}
                              placeholder="例: ねこフィード"
                              required
                              className="bg-slate-900/60 border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:ring-blue-500/50 py-5 rounded-xl"
                            />
                          </div>

                          {/* Description */}
                          <div className="space-y-2">
                            <Label htmlFor="description" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              説明
                            </Label>
                            <textarea
                              id="description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              rows={3}
                              placeholder="例: 猫に関する投稿を集めたフィードです。"
                              className="w-full bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 resize-none select-text"
                            />
                          </div>

                          {/* Avatar Image Selection */}
                          <div className="space-y-2">
                            <Label htmlFor="avatar" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              アバター画像
                            </Label>
                            <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-900 p-4 rounded-xl">
                              <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                                {avatarPreview ? (
                                  <img src={avatarPreview} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                  <Compass className="w-8 h-8 text-slate-600 animate-pulse" />
                                )}
                              </div>
                              <div className="space-y-2 flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <Input
                                    id="avatar"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) {
                                        setAvatarFile(file);
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                          setAvatarPreview(reader.result as string);
                                        };
                                        reader.readAsDataURL(file);
                                      }
                                    }}
                                    className="bg-slate-950 border-slate-800 text-slate-300 text-xs file:bg-slate-900 file:text-slate-300 file:border-0 file:rounded-md file:px-2 file:py-1 cursor-pointer h-10 py-1.5"
                                  />
                                  {(avatarPreview || avatarFile || existingAvatarCid) && (
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      onClick={() => {
                                        setAvatarFile(null);
                                        setAvatarPreview(null);
                                        setExistingAvatarCid(null);
                                      }}
                                      className="text-rose-400 hover:text-rose-300 hover:bg-rose-950/20 text-xs py-1.5 px-3 rounded-lg shrink-0"
                                    >
                                      画像を削除
                                    </Button>
                                  )}
                                </div>
                                <p className="text-[9px] text-slate-500 leading-normal">
                                  PNG, JPEG, WEBP形式をサポートしています。
                                </p>
                              </div>
                            </div>
                          </div>


                        </div>
                      )}
                    </>
                  )}
                </CardContent>

                <CardFooter className="bg-slate-950/60 border-t border-slate-900/40 p-6 flex justify-between gap-4">
                  {step === 1 ? (
                    <>
                      <Button
                        key="btn-cancel-edit"
                        type="button"
                        variant="ghost"
                        onClick={handleCancelEdit}
                        className="flex-1 border border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-slate-200 py-6 rounded-xl"
                      >
                        キャンセル
                      </Button>
                      <Button
                        key="btn-next-step"
                        type="button"
                        onClick={handleNextStep}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-medium shadow-[0_0_20px_rgba(34,139,230,0.25)] hover:shadow-lg transition-all duration-300 py-6 rounded-xl flex items-center justify-center gap-2"
                      >
                        次へ進む
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        key="btn-prev-step"
                        type="button"
                        variant="ghost"
                        onClick={() => setStep(1)}
                        className="flex-1 border border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-slate-200 py-6 rounded-xl"
                      >
                        戻る
                      </Button>
                      <Button
                        key="btn-submit-feed"
                        type="submit"
                        disabled={isDeploying}
                        className={`flex-1 ${isEditing ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 shadow-[0_0_20px_rgba(34,139,230,0.25)]" : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 shadow-[0_0_20px_rgba(34,139,230,0.25)]"} text-white font-medium hover:shadow-lg transition-all duration-300 rounded-xl py-6 flex items-center justify-center gap-2`}
                      >
                        {isDeploying ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            反映中...
                          </>
                        ) : isEditing ? (
                          <>
                            <Pencil className="w-4 h-4" />
                            変更を反映して試す
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            反映して試す
                          </>
                        )}
                      </Button>
                    </>
                  )}
                </CardFooter>
              </form>
            </Card>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900/60 bg-slate-950/20 py-4 mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500 font-mono">
          <p>© usounds.work</p>
          <div className="flex items-center gap-4">
            <span>API: {apiBaseUrl}</span>
            <Link
              href="/help"
              className="hover:text-slate-300"
            >
              使い方
            </Link>
            <a 
              href="https://github.com/usounds/RitoFeedEditor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-slate-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <DialogContent className="bg-slate-950 border-slate-800 text-slate-100 max-w-sm rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-rose-400 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-400" />
              フィードを削除しますか？
            </DialogTitle>
            <DialogDescription className="text-slate-400 text-xs leading-relaxed">
              本当にフィード「{feedToDelete}」を削除しますか？<br />
              （この操作は元に戻せません）
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 sm:gap-0 mt-4">
            <Button
              variant="ghost"
              onClick={() => {
                setDeleteConfirmOpen(false);
                setFeedToDelete(null);
              }}
              className="hover:bg-slate-900 text-slate-400 hover:text-slate-200"
            >
              キャンセル
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                if (feedToDelete) {
                  handleDeleteFeed(feedToDelete);
                }
                setDeleteConfirmOpen(false);
                setFeedToDelete(null);
              }}
              className="bg-rose-600 hover:bg-rose-500 text-white font-medium"
            >
              削除する
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
