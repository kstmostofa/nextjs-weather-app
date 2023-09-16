import { getWeatherData } from '@/utils';
import Image from 'next/image';

export default async function WeatherCard({ location }) {
    console.log('xxxxx', location);
    const weatherData = await getWeatherData(location);
    console.log(weatherData);
    return (
        <div className="max-w-sm p-6 bg-purple-900 border border-gray-200 rounded-3xl shadow opacity-70">
            <h2 className="text-2xl font-normal tracking-normal text-white">
                {weatherData?.name}
            </h2>
            <p className="mb-5 font-normal text-white">{weatherData?.sys?.country}</p>
            <div className="flex flex-col items-center">
                <Image src="/weather.svg" alt="Weather Img" width={120} height={120} />
                <h2 className="mt-3 text-6xl font-semibold tracking-normal text-white md:text-4xl lg:text-6xl">
                    {weatherData?.main.temp}
                    <span className="text-6xl font-normal text-blue-300 md:text-4xl lg:text-6xl">°</span>
                </h2>
            </div>
        </div>
    );
}

