import React, { useRef, KeyboardEvent } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TagsInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  inputValue: string;
  onInputValueChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function TagsInput({ value, onChange, inputValue, onInputValueChange, placeholder, disabled }: TagsInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const isComposing = useRef(false);

  const addTags = (text: string) => {
    const newTags = text
      .split(/[,\s\u3001]+/) // Split by comma, space, Japanese comma
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0 && !value.includes(tag));

    if (newTags.length > 0) {
      onChange([...value, ...newTags]);
    }
    onInputValueChange("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (isComposing.current) return;

    if (e.key === "Enter" || e.key === " " || e.key === "," || e.key === "Tab") {
      e.preventDefault();
      addTags(inputValue);
    } else if (e.key === "Backspace" && inputValue === "" && value.length > 0) {
      // Backspace with empty input deletes the last tag
      onChange(value.slice(0, -1));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // If it contains separator characters, split and add immediately (only if not composing)
    if (!isComposing.current && /[,\s\u3001]/.test(val)) {
      addTags(val);
    } else {
      onInputValueChange(val);
    }
  };

  const removeTag = (indexToRemove: number) => {
    if (disabled) return;
    onChange(value.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={`flex flex-wrap items-center gap-1.5 p-2 min-h-11 rounded-xl border border-slate-800 bg-slate-900/60 focus-within:ring-1 focus-within:ring-cyan-500/50 focus-within:border-cyan-500/50 transition-all cursor-text ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      {value.map((tag, index) => (
        <Badge
          key={`${tag}-${index}`}
          variant="secondary"
          className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 shrink-0 group select-none"
        >
          <span>{tag}</span>
          {!disabled && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeTag(index);
              }}
              className="text-slate-400 hover:text-rose-400 rounded-full focus:outline-none focus:ring-1 focus:ring-rose-500/20 p-0.5 -mr-1 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </Badge>
      ))}
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => {
          isComposing.current = true;
        }}
        onCompositionEnd={(e) => {
          isComposing.current = false;
          onInputValueChange(e.currentTarget.value);
        }}
        onBlur={() => addTags(inputValue)}
        placeholder={value.length === 0 ? placeholder : ""}
        disabled={disabled}
        className="flex-1 min-w-[120px] bg-transparent border-0 p-1 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-0 disabled:cursor-not-allowed"
      />
    </div>
  );
}
