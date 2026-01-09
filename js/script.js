// Template styles/colors
const templates = {
    neon: {
        name: 'Neon Cyber',
        color1: '#0f0c29',
        color2: '#302b63',
        color3: '#24243e',
        accentLight: '#00ffff',
        accentDark: '#00ff88'
    },
    ocean: {
        name: 'Ocean Blue',
        color1: '#0a1628',
        color2: '#1e3a5f',
        color3: '#0d2747',
        accentLight: '#00d4ff',
        accentDark: '#00ffcc'
    },
    sunset: {
        name: 'Sunset',
        color1: '#2d1b00',
        color2: '#662200',
        color3: '#330011',
        accentLight: '#ffaa00',
        accentDark: '#ff6600'
    },
    forest: {
        name: 'Forest Green',
        color1: '#0a2e1a',
        color2: '#1b5e3f',
        color3: '#0d3d28',
        accentLight: '#00ff88',
        accentDark: '#00cc66'
    },
    dark: {
        name: 'Dark Mode',
        color1: '#0f0f0f',
        color2: '#1a1a1a',
        color3: '#0a0a0a',
        accentLight: '#888888',
        accentDark: '#aaaaaa'
    },
    custom: {
        name: 'Custom',
        color1: '#0f0c29',
        color2: '#302b63',
        color3: '#24243e',
        accentLight: '#00ffff',
        accentDark: '#00ff88'
    }
};

let currentTemplate = 'neon';

const socialMediaData = {
    github: { icon: '🐙', label: 'GitHub' },
    twitter: { icon: '𝕏', label: 'Twitter' },
    linkedin: { icon: '💼', label: 'LinkedIn' },
    portfolio: { icon: '🌐', label: 'Portfolio' },
    instagram: { icon: '📷', label: 'Instagram' }
};

let enabledIcons = ['github', 'instagram'];

/**
 * Change template style
 */
function changeTemplate() {
    const templateSelect = document.getElementById('templateStyle').value;
    currentTemplate = templateSelect;
    const template = templates[templateSelect];
    applyTemplateColors(template);
    updateTemplate();
}

/**
 * Apply template colors to the container
 */
function applyTemplateColors(template) {
    const container = document.getElementById('template');
    container.style.background = `linear-gradient(135deg, ${template.color1} 0%, ${template.color2} 50%, ${template.color3} 100%)`;
    
    // Update all cyan colors to new accent light
    const elements = document.querySelectorAll('[style*="color: #00ffff"], [style*="border: 3px solid #00ffff"]');
    elements.forEach(el => {
        el.style.color = template.accentLight;
        el.style.borderColor = template.accentLight;
    });

    // Update CSS variables for accent colors
    const style = document.documentElement.style;
    style.setProperty('--accent-light', template.accentLight);
    style.setProperty('--accent-dark', template.accentDark);

    // Update main title
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        mainTitle.style.background = `linear-gradient(90deg, ${template.accentLight} 0%, ${template.accentDark} 50%, ${template.accentLight} 100%)`;
        mainTitle.style.backgroundSize = '200% auto';
    }
}

/**
 * Apply custom background colors
 */
function applyCustomBackground() {
    const color1 = document.getElementById('bgColor1').value;
    const color2 = document.getElementById('bgColor2').value;
    const color3 = document.getElementById('bgColor3').value;

    const customTemplate = {
        name: 'Custom',
        color1: color1,
        color2: color2,
        color3: color3,
        accentLight: templates.neon.accentLight,
        accentDark: templates.neon.accentDark
    };

    templates.custom = customTemplate;
    document.getElementById('templateStyle').value = 'custom';
    currentTemplate = 'custom';
    applyTemplateColors(customTemplate);
    updateTemplate();
    alert('✨ Custom background applied!');
}

/**
 * Apply title styling (font, color, background, opacity, size)
 */
function applyTitleStyles() {
    const mainTitle = document.querySelector('.main-title');
    const titleFont = document.getElementById('titleFont').value;
    const titleTextColor = document.getElementById('titleTextColor').value;
    const titleBgColor = document.getElementById('titleBgColor').value;
    const titleBgOpacity = document.getElementById('titleBgOpacity').value;
    const titleFontSize = document.getElementById('titleFontSize').value;

    // Apply font
    mainTitle.style.fontFamily = titleFont;

    // Apply font size
    mainTitle.style.fontSize = titleFontSize + 'px';

    // Apply text color with gradient fallback
    if (titleBgOpacity > 0) {
        mainTitle.style.color = titleTextColor;
        mainTitle.style.backgroundImage = 'none';
        mainTitle.style.backgroundColor = titleBgColor;
        mainTitle.style.backgroundClip = 'padding-box';
        mainTitle.style.WebkitBackgroundClip = 'padding-box';
        mainTitle.style.WebkitTextFillColor = 'unset';
    } else {
        mainTitle.style.backgroundImage = `linear-gradient(90deg, ${titleTextColor} 0%, ${titleTextColor} 50%, ${titleTextColor} 100%)`;
        mainTitle.style.backgroundSize = '200% auto';
        mainTitle.style.WebkitBackgroundClip = 'text';
        mainTitle.style.backgroundClip = 'text';
        mainTitle.style.WebkitTextFillColor = 'transparent';
    }

    // Apply background with opacity
    const opacity = titleBgOpacity / 100;
    mainTitle.style.backgroundColor = titleBgColor + Math.floor(opacity * 255).toString(16).padStart(2, '0');
    mainTitle.style.padding = titleBgOpacity > 0 ? '20px 30px' : '0';
    mainTitle.style.borderRadius = titleBgOpacity > 0 ? '15px' : '0';

    // Update opacity display
    document.getElementById('opacityValue').textContent = titleBgOpacity + '%';
    document.getElementById('fontSizeValue').textContent = titleFontSize + 'px';
}

/**
 * Update all template content
 */
function updateTemplate() {
    const customTitle = document.getElementById('customTitle').value;
    const dayNumber = document.getElementById('dayNumber').value;
    const totalDays = document.getElementById('totalDays').value;
    const projectName = document.getElementById('projectName').value;
    const techStack = document.getElementById('techStack').value;
    const description = document.getElementById('description').value;
    const socialHandle = document.getElementById('socialHandle').value;
    const hashtags = document.getElementById('hashtags').value;

    // Update main title
    document.querySelector('.main-title').textContent = customTitle;

    // Update day counter
    document.getElementById('currentDay').textContent = dayNumber;
    document.getElementById('totalDayDisplay').textContent = totalDays;
    
    // Update progress
    const progressPercent = dayNumber;
    document.getElementById('progressPercent').textContent = progressPercent + '%';
    document.getElementById('progressFill').style.width = progressPercent + '%';

    // Update project name
    document.getElementById('projectNameDisplay').textContent = projectName;

    // Update social handle
    document.getElementById('socialHandleDisplay').textContent = socialHandle;

    // Update hashtags
    document.getElementById('hashtagsDisplay').textContent = hashtags;

    // Update tech stack
    const techStackDisplay = document.getElementById('techStackDisplay');
    const techArray = techStack.split(',').map(tech => tech.trim());
    const techIcons = {
        'React': '⚛️',
        'Vue': '💚',
        'Angular': '🅰️',
        'JavaScript': '🟨',
        'TypeScript': '🔷',
        'Python': '🐍',
        'Node': '🟢',
        'Express': '🚂',
        'MongoDB': '🍃',
        'PostgreSQL': '🐘',
        'MySQL': '🐬',
        'Firebase': '🔥',
        'AWS': '☁️',
        'Docker': '🐳',
        'Kubernetes': '☸️',
        'Tailwind': '🎨',
        'CSS': '🎨',
        'HTML': '📄',
        'Vite': '⚡',
        'Webpack': '📦',
        'Git': '📚',
        'GitHub': '🐙',
        'Next.js': '▲',
        'Redux': '🔮'
    };

    techStackDisplay.innerHTML = techArray.map(tech => {
        const icon = techIcons[tech] || '🔧';
        return `<div class="tech-badge">${icon} ${tech}</div>`;
    }).join('');

    // Update description
    document.getElementById('descriptionDisplay').textContent = description;

    // Update social media icons
    updateSocialMediaIcons();
}

/**
 * Toggle social media icon visibility
 */
function toggleIcon(iconName) {
    const index = enabledIcons.indexOf(iconName);
    if (index > -1) {
        enabledIcons.splice(index, 1);
    } else {
        enabledIcons.push(iconName);
    }
    updateSocialMediaIcons();
    
    // Update button styles
    document.querySelectorAll('.icon-btn').forEach(btn => {
        const icon = btn.getAttribute('data-icon');
        if (enabledIcons.includes(icon)) {
            btn.style.background = 'rgba(0, 255, 255, 0.4)';
            btn.style.borderColor = '#00ff88';
        } else {
            btn.style.background = 'rgba(0, 255, 255, 0.2)';
            btn.style.borderColor = '#00ffff';
        }
    });
}

/**
 * Update social media icons display
 */
function updateSocialMediaIcons() {
    const iconsContainer = document.getElementById('socialMediaIcons');
    iconsContainer.innerHTML = enabledIcons.map(iconName => {
        const data = socialMediaData[iconName];
        return `<div class="status-badge">${data.icon} ${data.label}</div>`;
    }).join('');
}

/**
 * Download template as image
 */
async function downloadImage() {
    const template = document.getElementById('template');
    const controls = document.querySelector('.controls');
    const downloadBtn = event.target;
    
    try {
        // Show loading state
        downloadBtn.textContent = '⏳ Generating...';
        downloadBtn.disabled = true;
        
        // Hide controls temporarily
        controls.style.display = 'none';
        
        // Store original styles
        const originalTransform = template.style.transform;
        const originalPosition = document.body.style.position;
        const originalOverflow = document.body.style.overflow;
        
        // Set body to fixed position to prevent scrolling issues
        document.body.style.position = 'fixed';
        document.body.style.overflow = 'hidden';
        
        // Reset any transform on template
        template.style.transform = 'none';
        
        // Wait a moment for styles to apply
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Capture the template at exact Instagram dimensions
        const canvas = await html2canvas(template, {
            scale: 1,
            width: 1080,
            height: 1920,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#0a0a0a',
            logging: false,
            windowWidth: 1080,
            windowHeight: 1920,
            x: 0,
            y: 0
        });
        
        // Ensure canvas is exactly 1080x1920
        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = 1080;
        finalCanvas.height = 1920;
        const ctx = finalCanvas.getContext('2d');
        
        // Fill background
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, 1080, 1920);
        
        // Draw captured image centered
        ctx.drawImage(canvas, 0, 0, 1080, 1920);
        
        // Convert to blob and download
        finalCanvas.toBlob(function(blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            const dayNum = document.getElementById('dayNumber').value;
            link.download = `100-days-of-code-day-${dayNum}-1080x1920.png`;
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            // Restore original styles
            template.style.transform = originalTransform;
            document.body.style.position = originalPosition;
            document.body.style.overflow = originalOverflow;
            
            // Reset button
            downloadBtn.textContent = '📥 Download Image';
            downloadBtn.disabled = false;
            
            // Show success message
            alert('✅ Image downloaded!\nSize: 1080x1920px (Instagram Reel format)');
        }, 'image/png', 1.0);
        
    } catch (error) {
        console.error('Download error:', error);
        alert('❌ Download failed. Please try the screenshot method instead.');
        downloadBtn.textContent = '📥 Download Image';
        downloadBtn.disabled = false;
    } finally {
        // Show controls again
        controls.style.display = 'block';
    }
}

/**
 * Show screenshot guide
 */
function downloadAsScreenshot() {
    alert('📸 Alternative Method:\n\n1. Press F12 (Developer Tools)\n2. Press Ctrl+Shift+P (Command Menu)\n3. Type "screenshot"\n4. Select "Capture node screenshot"\n5. Click on the template\n\nOr use the native screenshot tool on your device!');
}

/**
 * Initialize template on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    applyTemplateColors(templates.neon);
    updateTemplate();
    
    // Initialize icon button styles
    document.querySelectorAll('.icon-btn').forEach(btn => {
        const icon = btn.getAttribute('data-icon');
        if (enabledIcons.includes(icon)) {
            btn.style.background = 'rgba(0, 255, 255, 0.4)';
            btn.style.borderColor = '#00ff88';
        }
    });

    // Add real-time updates for inputs
    document.getElementById('customTitle').addEventListener('input', () => {
        document.querySelector('.main-title').textContent = document.getElementById('customTitle').value;
    });

    document.getElementById('dayNumber').addEventListener('input', () => {
        document.getElementById('currentDay').textContent = document.getElementById('dayNumber').value;
    });

    document.getElementById('totalDays').addEventListener('input', () => {
        document.getElementById('totalDayDisplay').textContent = document.getElementById('totalDays').value;
    });

    // Apply initial title styles
    applyTitleStyles();
});
