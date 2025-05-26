# Timezone Grid 🌍

A dead-simple web tool that displays a time grid showing multiple time zones simultaneously, with visual highlighting of business/waking hours. Perfect for coordinating meetings across different timezones!

## Features

### 🕐 Time Zone Grid Display
- Left column shows 24-hour time (00:00 to 23:59)
- Each additional column represents a different time zone
- Real-time clock showing current time across all zones (updates every minute)
- Clean, scannable dark mode grid layout

### 🌐 Dynamic Time Zone Management
- Start with 3 default time zones (NYC, London, Tokyo)
- Quick add buttons for 10 most common time zones
- "More zones..." dropdown for additional 10 time zones from around the world
- "×" button on each column header to remove time zones
- 20 total available time zones including major cities worldwide

### 🟢 Business Hours Highlighting
- Default highlight: 8am-8pm range (green background with border)
- Visual highlight shows "good meeting times" across zones
- Quickly see overlapping business hours at a glance
- Each row shows the corresponding time in each timezone

### ⚙️ Customizable Hour Ranges
- Click on any time zone column header to edit its business hours
- Simple time picker: start time and end time (24-hour format)
- Each time zone can have its own custom range
- Highlighting updates immediately across the grid
- Modal interface for easy editing

### 📱 Responsive Design
- Works on desktop and mobile devices
- Horizontal scrolling for timezone columns on smaller screens
- Sticky left column for time reference
- Dark mode interface for reduced eye strain

## Available Time Zones

The tool includes 20 major time zones:
- **Americas**: New York, Los Angeles, Chicago, Denver, Toronto, Vancouver, São Paulo, Mexico City
- **Europe**: London, Paris, Berlin, Moscow
- **Asia**: Tokyo, Singapore, Mumbai, Beijing, Hong Kong, Seoul, Dubai
- **Oceania**: Sydney

## Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS** for styling (dark mode)
- **Vite** for development and building
- Browser's built-in `Intl.DateTimeFormat` for timezone handling

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Time
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## Usage

1. **View Current Times**: The top section shows real-time clocks for all active timezones
2. **Add Timezones**: Click the "+" buttons or use the "More zones..." dropdown
3. **Remove Timezones**: Hover over a timezone header and click the "×" button
4. **Customize Business Hours**: Click any timezone name to open the editor
5. **Find Meeting Times**: Look for green highlighted rows that span multiple timezones

## Perfect For

- 🤝 **Remote Teams**: Find overlapping work hours
- 📅 **Meeting Planning**: Schedule calls across timezones  
- 🌍 **Global Coordination**: Understand time differences at a glance
- 👥 **Friends & Family**: See when everyone is awake

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this for personal or commercial projects.
