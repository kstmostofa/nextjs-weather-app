import Image from 'next/image'
import styles from './page.module.css'
import { WeatherCard } from '@/components'

export default function Home() {
  return (
    <main className="p-6 sm:p-10 space-y-6">
      <div className='grid grid-cols-2 gap-4'>
        <div className='col-span-2 sm:col-span-1'>
          <h1 className='text-3xl font-semibold mb-3 ml-3'>Weather Reports</h1>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <WeatherCard location="dubai" />
            <WeatherCard location="abu dhabi" />
            <WeatherCard location="sharjah" />
            <WeatherCard location="london" />
            <WeatherCard location="new york" />
            <WeatherCard location="tokyo" />
          </div>
        </div>
        <div className='col-span-2 sm:col-span-1 bg-violet-50 h-full'>
          
        </div>
      </div>

    </main>
  )
}
