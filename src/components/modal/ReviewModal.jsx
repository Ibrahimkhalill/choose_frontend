import React, { useState, useRef } from "react";
import { X, Upload, RotateCw } from "lucide-react";

export default function ReviewModal({ isOpen, onClose }) {
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [texts, setTexts] = useState([]);
  const [showTextInput, setShowTextInput] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [selectedTextId, setSelectedTextId] = useState(null);
  const [isDraggingText, setIsDraggingText] = useState(false);
  const fileInputRef = useRef(null);
  const imageContainerRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.match("image/(jpeg|jpg|png)")) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.match("image/(jpeg|jpg|png)")) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const addText = () => {
    if (currentText.trim()) {
      const newText = {
        id: Date.now(),
        content: currentText,
        x: 50,
        y: 50,
        fontSize: 32,
        color: "white",
        rotation: 0,
      };
      setTexts([...texts, newText]);
      setCurrentText("");
      setShowTextInput(false);
      setSelectedTextId(newText.id);
    }
  };

  const removeText = (id) => {
    setTexts(texts.filter((t) => t.id !== id));
    setSelectedTextId(null);
  };

  const updateTextColor = (id, newColor) => {
    setTexts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, color: newColor } : t))
    );
  };

  const startDrag = (id, e) => {
    e.stopPropagation();
    setSelectedTextId(id);
    setIsDraggingText(true);

    const container = imageContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const isTouch = e.type.includes("touch");
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;

    // Calculate initial offset
    const text = texts.find((t) => t.id === id);
    const initialX = (text.x / 100) * rect.width + rect.left;
    const initialY = (text.y / 100) * rect.height + rect.top;
    const offsetX = clientX - initialX;
    const offsetY = clientY - initialY;

    const handleMove = (moveEvent) => {
      const moveClientX = isTouch
        ? moveEvent.touches[0].clientX
        : moveEvent.clientX;
      const moveClientY = isTouch
        ? moveEvent.touches[0].clientY
        : moveEvent.clientY;

      // Calculate new position with offset
      const newX = moveClientX - rect.left - offsetX;
      const newY = moveClientY - rect.top - offsetY;

      const x = (newX / rect.width) * 100;
      const y = (newY / rect.height) * 100;

      setTexts((prev) =>
        prev.map((t) =>
          t.id === id
            ? {
                ...t,
                x: Math.max(5, Math.min(95, x)),
                y: Math.max(5, Math.min(95, y)),
              }
            : t
        )
      );
    };

    const handleEnd = () => {
      setIsDraggingText(false);
      if (isTouch) {
        document.removeEventListener("touchmove", handleMove);
        document.removeEventListener("touchend", handleEnd);
      } else {
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleEnd);
      }
    };

    if (isTouch) {
      document.addEventListener("touchmove", handleMove, { passive: false });
      document.addEventListener("touchend", handleEnd);
    } else {
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleEnd);
    }
  };

  const startResize = (id, e) => {
    e.stopPropagation();
    const text = texts.find((t) => t.id === id);
    const startSize = text.fontSize;
    const isTouch = e.type.includes("touch");
    const startX = isTouch ? e.touches[0].clientX : e.clientX;
    const startY = isTouch ? e.touches[0].clientY : e.clientY;

    const handleMove = (moveEvent) => {
      const moveX = isTouch ? moveEvent.touches[0].clientX : moveEvent.clientX;
      const moveY = isTouch ? moveEvent.touches[0].clientY : moveEvent.clientY;

      const deltaX = moveX - startX;
      const deltaY = moveY - startY;
      const delta = (deltaX + deltaY) / 2;
      const newSize = Math.max(16, Math.min(100, startSize + delta / 3));

      setTexts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, fontSize: newSize } : t))
      );
    };

    const handleEnd = () => {
      if (isTouch) {
        document.removeEventListener("touchmove", handleMove);
        document.removeEventListener("touchend", handleEnd);
      } else {
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleEnd);
      }
    };

    if (isTouch) {
      document.addEventListener("touchmove", handleMove, { passive: false });
      document.addEventListener("touchend", handleEnd);
    } else {
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleEnd);
    }
  };

  const startRotate = (id, e) => {
    e.stopPropagation();
    const text = texts.find((t) => t.id === id);
    const container = imageContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + (text.x / 100) * rect.width;
    const centerY = rect.top + (text.y / 100) * rect.height;
    const isTouch = e.type.includes("touch");

    const handleMove = (moveEvent) => {
      const moveX = isTouch ? moveEvent.touches[0].clientX : moveEvent.clientX;
      const moveY = isTouch ? moveEvent.touches[0].clientY : moveEvent.clientY;

      const angle =
        Math.atan2(moveY - centerY, moveX - centerX) * (180 / Math.PI);

      setTexts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, rotation: angle } : t))
      );
    };

    const handleEnd = () => {
      if (isTouch) {
        document.removeEventListener("touchmove", handleMove);
        document.removeEventListener("touchend", handleEnd);
      } else {
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleEnd);
      }
    };

    if (isTouch) {
      document.addEventListener("touchmove", handleMove, { passive: false });
      document.addEventListener("touchend", handleEnd);
    } else {
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleEnd);
    }
  };

  const selectedText = texts.find((t) => t.id === selectedTextId);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Review</h2>
          <button
            onClick={() => onClose()}
            className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 p-4 overflow-auto">
          {!image ? (
            <div
              className={`border-2 border-dashed rounded-xl p-12 transition-all min-h-[400px] flex items-center justify-center ${
                isDragging
                  ? "border-amber-500 bg-amber-50"
                  : "border-gray-300 bg-gray-50"
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}>
              <label className="flex flex-col items-center cursor-pointer">
                <Upload size={48} className="text-gray-400 mb-4" />
                <span className="text-lg font-medium text-gray-700 mb-1">
                  Upload
                </span>
                <span className="text-sm text-gray-500">JPG, PNG or JPEG</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          ) : (
            <div className="space-y-3">
              <div
                ref={imageContainerRef}
                className="relative rounded-xl overflow-hidden  touch-none bg-transparent"
                onClick={() => setSelectedTextId(null)}>
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-[50vh] object-contain pointer-events-none select-none"
                  draggable="false"
                />

                {texts.map((text) => (
                  <div
                    key={text.id}
                    className="absolute touch-none"
                    style={{
                      left: `${text.x}%`,
                      top: `${text.y}%`,
                      transform: `translate(-50%, -50%) rotate(${text.rotation}deg)`,
                      cursor: isDraggingText ? "grabbing" : "grab",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTextId(text.id);
                    }}>
                    <div className="relative group">
                      {/* Text Content */}
                      <div
                        onMouseDown={(e) => startDrag(text.id, e)}
                        onTouchStart={(e) => startDrag(text.id, e)}>
                        <p
                          className="font-serif select-none transition-all duration-200"
                          style={{
                            fontSize: `${text.fontSize}px`,
                            color: text.color,
                            textShadow:
                              text.color === "white"
                                ? ""
                                : "3px 3px 8px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.5)",
                            whiteSpace: "nowrap",
                            fontWeight: "500",
                          }}>
                          {text.content}
                        </p>
                      </div>

                      {/* Control Handles - Show when selected */}
                      {selectedTextId === text.id && (
                        <>
                          <div className="absolute inset-0 -m-4 border-2 border-blue-400 rounded-lg pointer-events-none"></div>

                          {/* Delete Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeText(text.id);
                            }}
                            className="absolute -top-8 -right-8 bg-red-500 text-white  rounded-full w-5 h-5 flex items-center justify-center shadow-lg hover:scale-110 transition-all z-10 md:-top-6 md:-right-6">
                            <X size={18} className="md:w-4 md:h-4" />
                          </button>

                          {/* Resize Handle - Bottom Right */}
                          <div
                            onMouseDown={(e) => startResize(text.id, e)}
                            onTouchStart={(e) => startResize(text.id, e)}
                            className="absolute -bottom-4 -right-4 w-9 h-9  cursor-nwse-resize shadow-lg hover:scale-110 transition-all z-10 flex items-center justify-center md:w-6 md:h-6 md:-bottom-3 md:-right-3"></div>

                          {/* Rotate Handle - Top Left - HIDDEN */}
                          <div
                            onMouseDown={(e) => startRotate(text.id, e)}
                            onTouchStart={(e) => startRotate(text.id, e)}
                            className="absolute -top-8 -left-8 w-9 h-9 rounded-full cursor-grab active:cursor-grabbing transition-all z-10 md:w-8 md:h-8 md:-top-6 md:-left-6 opacity-0"></div>
                        </>
                      )}
                    </div>
                  </div>
                ))}

                {/* Text Input Overlay */}
                {showTextInput && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">
                    <div className="w-full max-w-md space-y-4 md:space-y-6">
                      <input
                        type="text"
                        value={currentText}
                        onChange={(e) => setCurrentText(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && addText()}
                        placeholder="Type something..."
                        className="w-full  py-3 bg-transparent border-b-2 border-white/20 focus:border-white/20 text-white text-xl  placeholder-white/40 focus:outline-none transition-all md:py-2"
                        autoFocus
                      />
                      <div className="flex justify-center gap-3 md:gap-4">
                        <button
                          onClick={addText}
                          disabled={!currentText.trim()}
                          className="px-6 py-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium rounded-full hover:from-amber-700 hover:to-amber-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ">
                          Done
                        </button>
                        <button
                          onClick={() => {
                            setShowTextInput(false);
                            setCurrentText("");
                          }}
                          className="px-6 py-2 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all backdrop-blur ">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Aa Button & Color Picker */}
                <div className="absolute top-4 right-4 flex items-center gap-3">
                  {/* Color Picker - Show only when text is selected */}
                  {selectedText && (
                    <div className="flex gap-2 bg-gray-900/90 rounded-full p-2  animate-in fade-in duration-200">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateTextColor(selectedTextId, "white");
                        }}
                        className={`w-5 h-5 rounded-full border-1 bg-white transition-all hover:scale-110  ${
                          selectedText.color === "white"
                            ? "border-blue-400 ring-1 ring-blue-400/50"
                            : "border-gray-300"
                        }`}></button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateTextColor(selectedTextId, "black");
                        }}
                        className={`w-5 h-5 rounded-full border-1 bg-black transition-all hover:scale-110  ${
                          selectedText.color === "black"
                            ? "border-blue-400 ring-1 ring-blue-400/50"
                            : "border-gray-600"
                        }`}></button>
                    </div>
                  )}

                  {/* Aa Button */}
                  <button
                    onClick={() => setShowTextInput(true)}
                    className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 py-1.5 rounded-full text-sm font-semibold hover:from-gray-800 hover:to-gray-700 transition-all shadow-lg border border-white/10 hover:scale-105 active:scale-95  md:text-base">
                    Aa
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setImage(null);
                  setTexts([]);
                  setSelectedTextId(null);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                  }
                }}
                className="w-full py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-all text-sm font-medium hover:scale-[1.02] active:scale-95">
                Remove Image
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
          <button
            onClick={() => onClose()}
            className="px-6 py-2.5 bg-white border border-gray-50 shadow text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition-all hover:scale-105 active:scale-95">
            Cancel
          </button>
          <button
            onClick={() => (window.location.href = "instagram://story-camera")}
            className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:scale-105 active:scale-95"
            disabled={!image}>
            Share to Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
