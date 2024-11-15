// Data for emojis categorized
const emojiData = {
  smileys: ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😇','🙂','🙃','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾'],
  animals: ['🐶','🐱','🐭','🐹','🐰','🦊','🦝','🐻','🐼','🦘','🦡','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🐣','🐥','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🦗','🕷','🕸','🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🦧','🐘','🦛','🦏','🐪','🐫','🦒','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🐐','🦌','🐕','🐩','🐈','🐓','🦃','🕊','🐇','🐁','🐀','🐿','🦔'],
  nature: ['🌵','🎄','🌲','🌳','🌴','🌱','🌿','☘️','🍀','🎍','🎋','🍃','🍂','🍁','🍄','🌾','💐','🌷','🌹','🥀','🌺','🌸','🌼','🌻','🌞','🌝','🌛','🌜','🌚','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','🌎','🌍','🌏','💫','⭐','🌟','✨','⚡','☄️','💥','🔥','🌪','🌈','☀️','🌤','⛅','🌥','☁️','🌦','🌧','⛈','🌩','🌨','❄️','☃️','⛄','🌬','💨','💧','💦','☔','☂️','🌊','🌫'],
  food: ['🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥒','🥬','🌶','🌽','🥕','🥔','🍠','🥐','🍞','🥖','🥨','🥯','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🥪','🥙','🧆','🌮','🌯','🥗','🥘','🥫','🍝','🍜','🍲','🍛','🍣','🍱','🥟','🍤','🍙','🍚','🍘','🍥','🥮','🥠','🍢','🍡','🍧','🍨','🍦','🥧','🧁','🍰','🎂','🍮','🍭','🍬','🍫','🍿','🧂'],
  activities: ['⚽','🏀','🏈','⚾','🎾','🏐','🏉','🥏','🎱','🪀','🏓','🏸','🥅','🏒','🏑','🥍','🏏','⛳','🏹','🎣','🤿','🥊','🥋','🎽','🛹','🛷','⛸','🥌','🎿','⛷','🏂','🪂','🏋️‍♀️','🏋️‍♂️','🤼‍♀️','🤼‍♂️','🤸‍♀️','🤸‍♂️','⛹️‍♀️','⛹️‍♂️','🤺','🤾‍♀️','🤾‍♂️','🏌️‍♀️','🏌️‍♂️','🏇','🧘‍♀️','🧘‍♂️','🏄‍♀️','🏄‍♂️','🏊‍♀️','🏊‍♂️','🤽‍♀️','🤽‍♂️','🚣‍♀️','🚣‍♂️','🧗‍♀️','🧗‍♂️','🚵‍♀️','🚵‍♂️','🚴‍♀️','🚴‍♂️','🏆','🎖','🏅','🥇','🥈','🥉','🎗','🏵','🎫','🎟'],
  travel: ['🚗','🚕','🚙','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🛻','🚚','🚛','🚜','🏍','🛵','🦽','🦼','🛺','🚲','🛴','🛹','🚏','🛣','🛤','🛢','⛽','🚨','🚥','🚦','🛑','🚧','⚓','⛵','🛶','🚤','🛳','⛴','🛥','🚢','✈️','🛩','🛫','🛬','💺','🚁','🚟','🚠','🚡','🛰','🚀','🛸','🌌','🛎','🧳'],
  objects: ['⌚','📱','📲','💻','⌨️','🖥','🖨','🖱','🖲','🕹','🗜','💽','💾','💿','📀','📼','📷','📸','📹','🎥','📽','🎞','📞','☎️','📟','📠','📺','📻','🎙','🎚','🎛','⏱','⏲','⏰','🕰','⌛','⏳','📡','🔋','🔌','💡','🔦','🕯','🪔','🧯','🛢','💸','💵','💴','💶','💷','💰','💳','💎','⚖️','🪙','🔧','🔨','⚒️','🛠','⛏','🔩','⚙️','🗜','⚗','🔬','🔭','📡','💉','💊','🩸','🩹','🩺','🚪','🛏','🛋','🪑','🚽','🚿','🛁','🪠','🧴','🧷','🧹','🧺','🧻','🧼','🪒','🧽','🧯','🛒'],
  symbols: ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❤️‍🔥','❤️‍🩹','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🕉️','☸️','✡️','🔯','🕎','☯️','☦️','🛐','⛎','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','🆔','⚛️','🉑','☢️','☣️','📴','📳','🈶','🈚','🈸','🈺','🈷️','✴️','🆚','💮','🉐','㊙️','㊗️','🈴','🈵','🈹','🈲','🅰️','🅱️','🆎','🆑','🅾️','🆘','❌','⭕','🛑','⛔','📛','🚫','💯','💢','♨️','🚷','🚯','🚳','🚱','🔞','📵','🚭','❗','❕','❓','❔','‼️','⁉️','🔅','🔆','〽️','⚠️','🚸','🔱','⚜️','🔰','♻️','✅','🈯','💹','❇️','✳️','❎','🌐','💠','Ⓜ️','🌀','💤','🏧','🚾','♿','🅿️','🛗','🈳','🈂️','🛂','🛃','🛄','🛅','🚹','🚺','🚼','🚻','🚮','🎦','📶','🈁','🔣','ℹ️','🔤','🔡','🔠','🆖','🆗','🆙','🆒','🆕','🆓','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔢','#️⃣','*️⃣'],
  flags: ['🏳️','🏴','🏁','🚩','🏳️‍🌈','🏳️‍⚧️','🇦🇫','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇶','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇦','🇧🇼','🇧🇷','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳','🇨🇴','🇰🇲','🇨🇩','🇨🇬','🇨🇷','🇨🇮','🇭🇷','🇨🇺','🇨🇾','🇨🇿','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇸🇿','🇪🇹','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇷','🇬🇱','🇬🇩','🇬🇺','🇬🇹','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇳','🇭🇰','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇱','🇮🇹','🇯🇲','🇯🇵','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺','🇲🇴','🇲🇰','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🇰🇵','🇲🇵','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇱','🇵🇹','🇵🇷','🇶🇦','🇷🇴','🇷🇺','🇷🇼','🇼🇸','🇸🇲','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🇸🇰','🇸🇮','🇸🇧','🇸🇴','🇿🇦','🇰🇷','🇸🇸','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇬','🇹🇴','🇹🇹','🇹🇳','🇹🇷','🇹🇲','🇹🇻','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸','🇺🇾','🇺🇿','🇻🇺','🇻🇦','🇻🇪','🇻🇳','🇾🇪','🇿🇲','🇿🇼'],
};

// List of category names
let categories = Object.keys(emojiData);
let currentCategoryIndex = 0;

// Variables for drag-and-drop functionality
let draggedEmoji = null;
let draggedEmojiClone = null;
let currentDroppable = null;
let autoScrollInterval = null;

// Error Logging Function
function logError(eventType, message, details = {}) {
  console.error(`Error [${eventType}]: ${message}`, details);
}

// Load emojis into the emoji grid
function loadEmojis(category) {
  try {
    const emojiGrid = document.getElementById('emoji-grid');
    emojiGrid.innerHTML = ''; // Clear existing emojis
    const emojis = emojiData[category];

    // Create and append emoji items
    emojis.forEach(emojiChar => {
      const emojiItem = createEmojiItem(emojiChar);
      emojiGrid.appendChild(emojiItem);
    });

    // Update the category name display
    const categoryNameDisplay = document.getElementById('category-name');
    categoryNameDisplay.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  } catch (error) {
    logError('loadEmojis', 'Failed to load emojis for category.', { category, error });
  }
}

// Create an emoji item element
function createEmojiItem(emojiChar) {
  const emojiItem = document.createElement('div');
  emojiItem.classList.add('emoji-item');
  emojiItem.textContent = emojiChar;

  // Make the emoji draggable
  emojiItem.setAttribute('draggable', 'true');

  // Touch event listeners for drag-and-drop
  emojiItem.addEventListener('touchstart', handleDragStart, false);
  emojiItem.addEventListener('touchmove', handleDragMove, false);
  emojiItem.addEventListener('touchend', handleDragEnd, false);

  // Mouse event listeners for desktop
  emojiItem.addEventListener('mousedown', handleMouseDown, false);

  return emojiItem;
}

// Handle navigation between categories
function navigateCategory(direction) {
  try {
    if (direction === 'prev') {
      currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
    } else if (direction === 'next') {
      currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
    }
    const newCategory = categories[currentCategoryIndex];
    loadEmojis(newCategory);
  } catch (error) {
    logError('navigateCategory', 'Failed to navigate categories.', { direction, error });
  }
}

// Event listeners for navigation buttons
document.getElementById('prev-category').addEventListener('click', () => navigateCategory('prev'));
document.getElementById('next-category').addEventListener('click', () => navigateCategory('next'));

// Drag-and-Drop Handlers for Touch Devices
function handleDragStart(e) {
  try {
    e.preventDefault();
    e.stopPropagation();
    draggedEmoji = e.target;
    draggedEmojiClone = draggedEmoji.cloneNode(true);
    draggedEmojiClone.classList.add('dragging-clone');
    document.body.appendChild(draggedEmojiClone);

    // Position the clone at the touch point
    const touch = e.touches[0];
    updateDraggedEmojiPosition(touch);

    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  } catch (error) {
    logError('handleDragStart', 'Failed during drag start.', { error });
  }
}

function handleDragMove(e) {
  try {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    const touch = e.touches[0];
    updateDraggedEmojiPosition(touch);

    // Auto-scroll functionality
    const viewportHeight = window.innerHeight;
    const scrollThreshold = 50;

    if (touch.clientY < scrollThreshold) {
      startAutoScroll('up');
    } else if (touch.clientY > viewportHeight - scrollThreshold) {
      startAutoScroll('down');
    } else {
      stopAutoScroll();
    }

    // Get the element under the touch point
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!elementBelow) return;

    const droppableBelow = elementBelow.closest('.emoji-placeholder');

    if (currentDroppable !== droppableBelow) {
      if (currentDroppable) {
        currentDroppable.classList.remove('highlight');
        currentDroppable.classList.remove('magnet-active');
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        currentDroppable.classList.add('highlight');
      }
    }

    // Magnet Effect: Check proximity and adjust position
    if (currentDroppable) {
      const placeholderRect = currentDroppable.getBoundingClientRect();
      const distance = getDistance(touch.clientX, touch.clientY, placeholderRect.left + placeholderRect.width / 2, placeholderRect.top + placeholderRect.height / 2);
      const magnetThreshold = 50; // Pixels

      if (distance < magnetThreshold) {
        currentDroppable.classList.add('magnet-active');
        // Slightly adjust the clone's position towards the center
        const deltaX = (placeholderRect.left + placeholderRect.width / 2 - touch.clientX) / 10;
        const deltaY = (placeholderRect.top + placeholderRect.height / 2 - touch.clientY) / 10;
        draggedEmojiClone.style.left = `${touch.clientX + deltaX}px`;
        draggedEmojiClone.style.top = `${touch.clientY + deltaY}px`;

        // Haptic feedback when entering magnet range
        if (distance < magnetThreshold && !draggedEmojiClone.hasVibrated) {
          if (navigator.vibrate) {
            navigator.vibrate(30);
          }
          draggedEmojiClone.hasVibrated = true;
        }
      } else {
        currentDroppable.classList.remove('magnet-active');
        draggedEmojiClone.hasVibrated = false;
      }
    }
  } catch (error) {
    logError('handleDragMove', 'Failed during drag move.', { error });
  }
}

function handleDragEnd(e) {
  try {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    draggedEmojiClone.remove();
    draggedEmojiClone = null;

    // Stop any ongoing auto-scroll
    stopAutoScroll();

    if (currentDroppable) {
      // Snap the emoji to the center of the placeholder
      currentDroppable.textContent = draggedEmoji.textContent;
      currentDroppable.classList.remove('highlight');
      currentDroppable.classList.remove('magnet-active');

      // Check if all placeholders are filled in the current sector
      const sector = currentDroppable.closest('.sector');
      if (sector) {
        const placeholders = sector.querySelectorAll('.emoji-placeholder');
        const allFilled = Array.from(placeholders).every(placeholder => placeholder.textContent.trim() !== '');
        if (allFilled) {
          const checkButton = sector.querySelector('.check-button');
          checkButton.classList.add('checked');
        }
      }
    }

    draggedEmoji = null;
    currentDroppable = null;
  } catch (error) {
    logError('handleDragEnd', 'Failed during drag end.', { error });
  }
}

// Mouse Event Handlers for Desktop Support
function handleMouseDown(e) {
  try {
    e.preventDefault();
    e.stopPropagation();
    draggedEmoji = e.target;
    draggedEmojiClone = draggedEmoji.cloneNode(true);
    draggedEmojiClone.classList.add('dragging-clone');
    document.body.appendChild(draggedEmojiClone);

    // Position the clone at the mouse point
    updateDraggedEmojiPosition(e);

    // Mouse move and up handlers
    document.addEventListener('mousemove', handleMouseMove, false);
    document.addEventListener('mouseup', handleMouseUp, false);
  } catch (error) {
    logError('handleMouseDown', 'Failed during mouse down.', { error });
  }
}

function handleMouseMove(e) {
  try {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    updateDraggedEmojiPosition(e);

    const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
    if (!elementBelow) return;

    const droppableBelow = elementBelow.closest('.emoji-placeholder');

    if (currentDroppable !== droppableBelow) {
      if (currentDroppable) {
        currentDroppable.classList.remove('highlight');
        currentDroppable.classList.remove('magnet-active');
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        currentDroppable.classList.add('highlight');
      }
    }

    // Magnet Effect: Check proximity and adjust position
    if (currentDroppable) {
      const placeholderRect = currentDroppable.getBoundingClientRect();
      const distance = getDistance(e.clientX, e.clientY, placeholderRect.left + placeholderRect.width / 2, placeholderRect.top + placeholderRect.height / 2);
      const magnetThreshold = 50; // Pixels

      if (distance < magnetThreshold) {
        currentDroppable.classList.add('magnet-active');
        // Slightly adjust the clone's position towards the center
        const deltaX = (placeholderRect.left + placeholderRect.width / 2 - e.clientX) / 10;
        const deltaY = (placeholderRect.top + placeholderRect.height / 2 - e.clientY) / 10;
        draggedEmojiClone.style.left = `${e.clientX + deltaX}px`;
        draggedEmojiClone.style.top = `${e.clientY + deltaY}px`;

        // Haptic feedback is generally not available on desktop; skip
      } else {
        currentDroppable.classList.remove('magnet-active');
      }
    }
  } catch (error) {
    logError('handleMouseMove', 'Failed during mouse move.', { error });
  }
}

function handleMouseUp(e) {
  try {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    draggedEmojiClone.remove();
    draggedEmojiClone = null;

    if (currentDroppable) {
      // Snap the emoji to the center of the placeholder
      currentDroppable.textContent = draggedEmoji.textContent;
      currentDroppable.classList.remove('highlight');
      currentDroppable.classList.remove('magnet-active');

      // Check if all placeholders are filled in the current sector
      const sector = currentDroppable.closest('.sector');
      if (sector) {
        const placeholders = sector.querySelectorAll('.emoji-placeholder');
        const allFilled = Array.from(placeholders).every(placeholder => placeholder.textContent.trim() !== '');
        if (allFilled) {
          const checkButton = sector.querySelector('.check-button');
          checkButton.classList.add('checked');
        }
      }
    }

    draggedEmoji = null;
    currentDroppable = null;

    document.removeEventListener('mousemove', handleMouseMove, false);
    document.removeEventListener('mouseup', handleMouseUp, false);
  } catch (error) {
    logError('handleMouseUp', 'Failed during mouse up.', { error });
  }
}

// Update the position of the dragged emoji clone
function updateDraggedEmojiPosition(event) {
  try {
    const x = event.clientX || (event.touches && event.touches[0].clientX);
    const y = event.clientY || (event.touches && event.touches[0].clientY);
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Position the clone under the cursor/finger
    draggedEmojiClone.style.left = `${x + scrollLeft - (draggedEmojiClone.offsetWidth / 2)}px`;
    draggedEmojiClone.style.top = `${y + scrollTop - (draggedEmojiClone.offsetHeight / 2)}px`;
    draggedEmojiClone.style.position = 'absolute';
    draggedEmojiClone.style.zIndex = 1000;
  } catch (error) {
    logError('updateDraggedEmojiPosition', 'Failed to update dragged emoji position.', { error });
  }
}

// Auto-scroll functions when dragging near the edges
function startAutoScroll(direction) {
  try {
    if (autoScrollInterval) return;

    autoScrollInterval = setInterval(() => {
      const scrollAmount = 20;
      if (direction === 'up') {
        window.scrollBy(0, -scrollAmount);
      } else if (direction === 'down') {
        window.scrollBy(0, scrollAmount);
      }
    }, 16); // Approximately 60fps
  } catch (error) {
    logError('startAutoScroll', 'Failed to start auto-scroll.', { direction, error });
  }
}

function stopAutoScroll() {
  try {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  } catch (error) {
    logError('stopAutoScroll', 'Failed to stop auto-scroll.', { error });
  }
}

// Calculate the distance between two points
function getDistance(x1, y1, x2, y2) {
  const a = x1 - x2;
  const b = y1 - y2;
  return Math.sqrt(a * a + b * b);
}

// Update live time display
function updateLiveTime() {
  try {
    const liveTimeElement = document.getElementById('live-time');
    const now = new Date();
    liveTimeElement.textContent = now.toLocaleTimeString();
  } catch (error) {
    logError('updateLiveTime', 'Failed to update live time.', { error });
  }
}

// Sector Check Buttons
const checkButtons = document.querySelectorAll('.check-button');
checkButtons.forEach(button => {
  button.addEventListener('click', () => {
    try {
      button.classList.toggle('checked');
    } catch (error) {
      logError('checkButton', 'Failed to toggle check button.', { button, error });
    }
  });
});

// Day Rating System
const ratingCircle = document.getElementById('rating-circle');
const ratingButtons = document.getElementById('rating-buttons').querySelectorAll('.rating-button');

ratingCircle.addEventListener('click', () => {
  try {
    ratingCircle.style.display = 'none';
    ratingButtons.forEach(button => {
      button.style.display = 'block';
    });
  } catch (error) {
    logError('ratingCircle', 'Failed to display rating buttons.', { error });
  }
});

ratingButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    try {
      ratingButtons.forEach((btn, idx) => {
        if (idx <= index) {
          btn.classList.add('selected');
        } else {
          btn.classList.remove('selected');
        }
      });
    } catch (error) {
      logError('ratingButton', 'Failed to select rating.', { button, index, error });
    }
  });
});

// Reset Button Functionality
document.getElementById('reset-button').addEventListener('click', () => {
  try {
    // Clear emojis from placeholders
    const placeholders = document.querySelectorAll('.emoji-placeholder');
    placeholders.forEach(placeholder => {
      placeholder.textContent = '';
    });

    // Reset sector checks
    checkButtons.forEach(button => {
      button.classList.remove('checked');
    });

    // Reset day rating
    ratingButtons.forEach(button => {
      button.classList.remove('selected');
      button.style.display = 'none';
    });
    ratingCircle.style.display = 'flex';

    // Clear text inputs
    const textInputs = document.querySelectorAll('.custom-text-inputs input');
    textInputs.forEach(input => {
      input.value = '';
    });
  } catch (error) {
    logError('resetButton', 'Failed to reset planner.', { error });
  }
});

// Initialize the application
function init() {
  try {
    // Load the default emoji category
    loadEmojis(categories[currentCategoryIndex]);

    // Update live time every second
    updateLiveTime();
    setInterval(updateLiveTime, 1000);
  } catch (error) {
    logError('init', 'Failed to initialize the application.', { error });
  }
}

init();
