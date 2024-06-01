import ReactECharts from 'echarts-for-react';
import { graphic } from 'echarts/core'

export function Overview() {
    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];
    let data = [Math.random() * 300];
    for (let i = 1; i < 20000; i++) {
        var now = new Date((base += oneDay));
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    let option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
            return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: 'Large Area Chart'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        series: [
            {
                name: 'Fake Data',
                type: 'line',
                symbol: 'none',
                areaStyle: {
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }
                    ])
                },
                data: data
            }
        ]
    };
    return (
        <div className="grid grid-cols-2">
            <div className="col-span-2" id="overview-graph">
                <ReactECharts option={option} />
            </div>
        </div>
    )
}