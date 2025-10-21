# Video Background Setup

## Required Video File

Add your event video file to the `public/videos/` directory with the following names:

- `event-background.mp4` (main video file)
- `event-background.webm` (optional for better browser support)

## Recommended Video Specifications

- **Duration**: 30-60 seconds (will loop automatically)
- **Resolution**: 1920x1080 (Full HD) minimum
- **Aspect Ratio**: 16:9
- **Format**: MP4 (H.264 codec)
- **File Size**: Under 10MB for optimal loading
- **Content**: High-quality event footage with good lighting
- **Style**: Should work well with text overlays

## Video Content Suggestions

- Wedding ceremony or reception footage
- Corporate event highlights
- Party celebrations
- Venue beauty shots
- Event setup/preparation montage

## Browser Support

The component includes fallbacks:

- MP4 for broad compatibility
- WebM for modern browsers
- Automatic muting for autoplay compliance
- Responsive sizing for all devices

## Performance Notes

- Video is set to autoplay, mute, and loop
- Uses object-fit: cover for proper scaling
- Positioned as fixed background (no scroll lag)
- Optimized for mobile with playsInline attribute
