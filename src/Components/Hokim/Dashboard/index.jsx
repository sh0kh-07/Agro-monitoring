import React from 'react';
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

// Регистрируем компоненты Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

export default function Dashboard() {
  // Данные планов
  const planlar = [
    'Ер ўзлаштириш', 
    'Шинжон усулида', 
    'Кузги шудгорлаш', 
    'Ички ариқларни бетонлаштириш',
    'Ариқларни тозалаш (қўл кучида)',
    'Ғаллани суғориш 1-сув',
    'Пилла шартнома тузиш',
    'Насосларга қуёш панели ўрнатиш',
    'Ғалла кредетидан қарздорлиги млн.сўм',
    'Пахта кредетидан қарздорлиги млн.сўм',
    'Сув солиғидан қарздорлик млн.сўм',
    'Судга бериш,(ф/х сони)',
  ];

  // Данные выполнения планов
  const bajarilgan = [85, 92, 78, 65, 88, 72, 81, 95,92,62,43,55];
  const reja = [100, 100, 100, 100, 100, 100, 100, 100, 100,100, 100, 100];
  const ortachaFoiz = bajarilgan.reduce((a, b) => a + b, 0) / bajarilgan.length;

  // Данные для столбчатой диаграммы (выполнение планов)
  const bajarilishData = {
    labels: planlar,
    datasets: [
      {
        label: 'Бажарилди (%)',
        data: bajarilgan,
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
        borderRadius: 6,
      },
      {
        label: 'Режа (%)',
        data: reja,
        backgroundColor: 'rgba(209, 213, 219, 0.6)',
        borderColor: 'rgba(156, 163, 175, 1)',
        borderWidth: 1,
        borderRadius: 6,
      }
    ]
  };


  // Данные для круговой диаграммы (статус планов)
  const statusData = {
    labels: ['Бажарилган', 'Жараёнда', 'Бошланмаган', 'Кечиктирилган'],
    datasets: [
      {
        label: 'Планлар статуси',
        data: [62, 25, 8, 5],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(156, 163, 175, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(156, 163, 175, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 2,
        cutout: '70%',
      }
    ]
  };

  // Общие настройки для графиков
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: "'Inter', sans-serif",
            size: 12
          },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 13
        },
        padding: 12,
        cornerRadius: 6,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y}%`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 11
          }
        }
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 11
          },
          callback: function(value) {
            return value + '%';
          }
        }
      }
    }
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: "'Inter', sans-serif",
            size: 12
          },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 13
        },
        padding: 12,
        cornerRadius: 6,
        callbacks: {
          label: function(context) {
            return `Бажарилиш: ${context.parsed.y}%`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 11
          }
        }
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 11
          },
          callback: function(value) {
            return value + '%';
          }
        }
      }
    }
  };

  // Статистические карточки по планам
  const statsCards = [
    {
      title: 'Умумий бажарилиш',
      value: `${ortachaFoiz.toFixed(1)}%`,
      change: '+3.2%',
      changeType: 'positive',
      icon: '📈',
      color: 'blue',
      description: 'Барча планар'
    },
    {
      title: 'Бажарилган планар',
      value: '15 та',
      change: '+2 та',
      changeType: 'positive',
      icon: '✅',
      color: 'green',
      description: '24 тадан'
    },
    {
      title: 'Ортиқча бажарилди',
      value: '8 та',
      change: '+1 та',
      changeType: 'positive',
      icon: '🏆',
      color: 'yellow',
      description: 'Режадан ошди'
    },
    {
      title: 'Кечиктирилди',
      value: '4 та',
      change: '-1 та',
      changeType: 'negative',
      icon: '⏰',
      color: 'red',
      description: 'Муддати ўтди'
    }
  ];

  // Подробные данные по планам
  const planDetails = [
    {
      name: 'Ер ўзлаштириш',
      bajarildi: 850,
      reja: 1000,
      foiz: 85,
      holat: 'Яхши',
      muddat: '15.12.2025'
    },
    {
      name: 'Шинжон усулида',
      bajarildi: 9200,
      reja: 10000,
      foiz: 92,
      holat: 'Аъло',
      muddat: '20.12.2025'
    },
    {
      name: 'Кузги шудгорлаш',
      bajarildi: 78,
      reja: 100,
      foiz: 78,
      holat: 'Ўртача',
      muddat: '10.12.2025'
    },
    {
      name: 'Ички ариқларни бетонлаштириш',
      bajarildi: 65,
      reja: 100,
      foiz: 65,
      holat: 'Кутилган',
      muddat: '25.12.2025'
    },
    {
      name: 'Ариқларни тозалаш (қўл кучида)',
      bajarildi: 88,
      reja: 100,
      foiz: 88,
      holat: 'Яхши',
      muddat: '30.12.2025'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Заголовок */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Планлар бажарилиши дашбоорди</h1>
        <p className="text-gray-600">Туманлар кесимидаги лойиҳалар ва планар мониторинги</p>
        <div className="h-1 w-24 bg-blue-500 rounded-full mt-3"></div>
      </div>

      {/* Статистические карточки */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat, index) => (
          <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardBody className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${stat.color}-50`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <span className={`text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'} bg-${stat.changeType === 'positive' ? 'green' : 'red'}-50 px-2 py-1 rounded-full`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Основные графики */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Столбчатая диаграмма выполнения планов */}
        <Card className="border border-gray-200 shadow-lg">
          <CardHeader 
            floated={false} 
            shadow={false} 
            className="rounded-none p-6 pb-3"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Лойиҳалар буйича бажарилиш</h2>
                <p className="text-gray-600 text-sm mt-1">Режа ва амалдаги бажарилиш фоизлари</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm">Бажарилди</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
                  <span className="text-sm">Режа</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="p-6 pt-0">
            <div className="h-80">
              <Bar data={bajarilishData} options={barOptions} />
            </div>
          </CardBody>
        </Card>

        {/* Круговая диаграмма и линейный график */}
        <div className="space-y-6">
          {/* Круговая диаграмма */}
          <Card className="border border-gray-200 shadow-lg">
            <CardHeader 
              floated={false} 
              shadow={false} 
              className="rounded-none p-6 pb-3"
            >
              <h2 className="text-xl font-bold text-gray-800">Планлар статуси</h2>
              <p className="text-gray-600 text-sm mt-1">Умумий тақсимланиш</p>
            </CardHeader>
            <CardBody className="p-6 pt-0">
              <div className="h-64 flex items-center justify-center">
                <Doughnut data={statusData} />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {statusData.labels.map((label, index) => (
                  <div key={index} className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: statusData.datasets[0].backgroundColor[index] }}
                    ></div>
                    <span className="text-sm text-gray-700">{label}</span>
                    <span className="ml-auto text-sm font-medium">
                      {statusData.datasets[0].data[index]}%
                    </span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Детальная таблица планов */}
      <Card className="border border-gray-200 shadow-lg mb-8">
        <CardHeader 
          floated={false} 
          shadow={false} 
          className="rounded-none p-6 pb-3"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Планлар деталлари</h2>
              <p className="text-gray-600 text-sm mt-1">Лойиҳа кесимидаги бажарилиш кўрсаткичлари</p>
            </div>
            <div className="text-sm text-gray-500">
              Ўзгариш: +2.3%
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-6 pt-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Лойиҳа номи</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Бажарилди</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Режа</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Фоиз</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Ҳолат</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Муддат</th>
                </tr>
              </thead>
              <tbody>
                {planDetails.map((plan, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{plan.name}</td>
                    <td className="py-3 px-4">{plan.bajarildi.toLocaleString()}</td>
                    <td className="py-3 px-4">{plan.reja.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                          <div 
                            className={`h-2 rounded-full ${
                              plan.foiz >= 90 ? 'bg-green-500' :
                              plan.foiz >= 70 ? 'bg-blue-500' :
                              plan.foiz >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${plan.foiz}%` }}
                          ></div>
                        </div>
                        <span className="font-medium">{plan.foiz}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        plan.holat === 'Аъло' ? 'bg-green-100 text-green-800' :
                        plan.holat === 'Яхши' ? 'bg-blue-100 text-blue-800' :
                        plan.holat === 'Ўртача' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {plan.holat}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{plan.muddat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}