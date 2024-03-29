import TitleLayout from "../../components/TitleLayout";
import {
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
  Area,
} from "recharts";

const data = [
  {
    name: "Semana 1",
    tortas: 4000,
    galletas: 2400,
    otros: 2400,
  },
  {
    name: "Semana 2",
    tortas: 3000,
    galletas: 1398,
    otros: 2210,
  },
  {
    name: "Semana 3",
    tortas: 2000,
    galletas: 9800,
    otros: 2290,
  },
  {
    name: "Semana 4",
    tortas: 2780,
    galletas: 3908,
    otros: 2000,
  },
  {
    name: "Semana 5",
    tortas: 1890,
    galletas: 4800,
    otros: 2181,
  },
  {
    name: "Semana 6",
    tortas: 2390,
    galletas: 3800,
    otros: 2500,
  },
  {
    name: "Semana 7",
    tortas: 3490,
    galletas: 4300,
    otros: 2100,
  },
];
const ChartContainer = () => {
  return (
    <div className="flex flex-col w-full sm:w-2/3 gap-2 justify-start h-full">
      <TitleLayout title="Grafica de Ventas" icon withIcon={false} />
      <div className="border-[1px] rounded-[6px] border-principal-color pb-5 h-full flex flex-col items-center w-full">
        <div className="flex flex-col gap-4 rounded-none md:flex-row md:items-center p-2 pl-5 w-full">
          <div className="flex items-end gap-1">
            <h2 className="text-[2rem]">Ventas </h2>
            <h3 className="text-sm bg-principal-color/30 text-principal-color px-2 py-[1px] rounded-[6px] mb-1">
              (Por semana){" "}
            </h3>
          </div>
        </div>
        <div className="px-3 pb-0 w-full">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              width={600}
              height={350}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorOthers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ca828e" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ca828e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="tortas"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="galletas"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
              <Area
                type="monotone"
                dataKey="otros"
                stroke="#ca828e"
                fillOpacity={1}
                fill="url(#colorOthers)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartContainer;
