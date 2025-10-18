
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const data = {
  labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه',"پنجشنبه","جمعه",],
  datasets: [
    {
      label: 'بازدیدها',
      data: [120, 200, 150, 180, 220,100,250],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    tooltip: { enabled: true },
  },
};

export default function ChartComponent() {
  return (
    <div className="bg-white p-4 mb-20 md:mb-0 h-[300px] md:h-[70vh] w-[98%] md:w-2/3 mx-auto rounded shadow-md shadow-teal-800 inset-shadow-sm inset-shadow-black ">
      <h3 className="text-gray-700 text-lg font-semibold mb-4 text-right">نمودار بازدیدهای این هفته</h3>
      <Line data={data} options={options} />
    </div>
  );
}
