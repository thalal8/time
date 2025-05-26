import { useState } from 'react'

interface TimeZone {
  id: string
  name: string
  iana: string
}

const COMMON_TIMEZONES: Omit<TimeZone, 'startHour' | 'endHour'>[] = [
  { id: 'ny', name: 'New York', iana: 'America/New_York' },
  { id: 'london', name: 'London', iana: 'Europe/London' },
  { id: 'tokyo', name: 'Tokyo', iana: 'Asia/Tokyo' },
  { id: 'la', name: 'Los Angeles', iana: 'America/Los_Angeles' },
  { id: 'paris', name: 'Paris', iana: 'Europe/Paris' },
  { id: 'sydney', name: 'Sydney', iana: 'Australia/Sydney' },
  { id: 'dubai', name: 'Dubai', iana: 'Asia/Dubai' },
  { id: 'singapore', name: 'Singapore', iana: 'Asia/Singapore' },
  { id: 'mumbai', name: 'Mumbai', iana: 'Asia/Kolkata' },
  { id: 'beijing', name: 'Beijing', iana: 'Asia/Shanghai' },
  { id: 'chicago', name: 'Chicago', iana: 'America/Chicago' },
  { id: 'denver', name: 'Denver', iana: 'America/Denver' },
  { id: 'toronto', name: 'Toronto', iana: 'America/Toronto' },
  { id: 'vancouver', name: 'Vancouver', iana: 'America/Vancouver' },
  { id: 'berlin', name: 'Berlin', iana: 'Europe/Berlin' },
  { id: 'moscow', name: 'Moscow', iana: 'Europe/Moscow' },
  { id: 'sao_paulo', name: 'São Paulo', iana: 'America/Sao_Paulo' },
  { id: 'mexico_city', name: 'Mexico City', iana: 'America/Mexico_City' },
  { id: 'hong_kong', name: 'Hong Kong', iana: 'Asia/Hong_Kong' },
  { id: 'seoul', name: 'Seoul', iana: 'Asia/Seoul' }
]

function App() {
  const [timeZones, setTimeZones] = useState<TimeZone[]>([
    { id: 'ny', name: 'New York', iana: 'America/New_York' },
    { id: 'london', name: 'London', iana: 'Europe/London' },
    { id: 'tokyo', name: 'Tokyo', iana: 'Asia/Tokyo' }
  ])

  const addTimeZone = (tzData: TimeZone) => {
    if (!timeZones.find(tz => tz.id === tzData.id)) {
      setTimeZones([...timeZones, { ...tzData }])
    }
  }

  const removeTimeZone = (id: string) => {
    setTimeZones(timeZones.filter(tz => tz.id !== id))
  }

  const getTimeInZone = (hour: number, iana: string) => {
    const date = new Date()
    date.setHours(hour, 0, 0, 0)
    return new Intl.DateTimeFormat('en-US', {
      timeZone: iana,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(date)
  }

  const hours = Array.from({ length: 24 }, (_, i) => i)
  const availableZones = COMMON_TIMEZONES.filter(tz => !timeZones.find(existing => existing.id === tz.id))

  return (
    <div className="min-h-screen text-white p-6">
      {/* Fixed Add Zone Controls */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="relative">
          <select
            onChange={(e) => {
              if (e.target.value) {
                const selectedZone = COMMON_TIMEZONES.find(zone => zone.id === e.target.value);
                if (selectedZone) {
                  addTimeZone(selectedZone);
                }
                e.target.value = ''; // Reset selection
              }
            }}
            className="timezone-button w-[100vw] px-4 py-3 h-[64px] text-base leading-6 uppercase border-none text-center appearance-none"
            defaultValue=""
          >
            <option value="" disabled>
              {availableZones.length === 0 ? 'All available timezones added' : 'Add Timezone'}
            </option>
            {availableZones.map(zone => (
              <option key={zone.id} value={zone.id}>
                {zone.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-20">
        {/* Time Grid */}
        <div className="rounded-lg overflow-hidden">
          <div className="h-[calc(100vh-64px)] overflow-y-auto table-container">
            <table className="w-full text-sm border-collapse border-spacing-0 table-fixed">
              <thead>
                <tr className="sticky-table-header">
                  <th className="text-center p-[0px] w-[80px] h-[64px] sticky-table-header">
                    <div className="flex items-center justify-center w-full h-[64px] border-l border-t border-r border-b border-[#181825]"></div>
                  </th>
                  {timeZones.map(zone => (
                    <th key={zone.id} className="text-center w-[240px] relative group sticky-table-header">  
                      <div className="flex items-center justify-center w-full h-[64px] border-t border-r border-b border-[#181825]">
                        <span></span>
                        <span>{zone.name}</span>
                        <button
                          onClick={() => removeTimeZone(zone.id)}
                          className="remove-button w-[64px] h-[64px] flex items-center justify-center transition-colors hover:bg-red-700"
                        >
                          <span className="text-[12px] leading-4">X</span>
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hours.map((hour, index) => (
                  <tr key={hour} className={`border-b border-[#181825] h-[64px] ${index === 0 ? '' : 'border-t border-[#181825]'}`}>
                    <td className="py-2 px-3 font-mono w-[80px] border-l border-r border-[#181825] text-center bg-[#0A0A0F]">
                      {hour.toString().padStart(2, '0')}:00
                    </td>
                    {timeZones.map(zone => {
                      return (
                        <td
                          key={zone.id}
                          className="py-2 px-3 text-center font-mono border-r border-[#181825] bg-[#0A0A0F]"
                        >
                          {getTimeInZone(hour, zone.iana)}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
