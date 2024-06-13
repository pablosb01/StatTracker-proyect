import ReactECharts from 'echarts-for-react';
import { graphic } from 'echarts/core'
import gameData from '/src/objects/matchinfo'
import { matchesFromAMatchData } from '/src/helpers/valorant/match';
import { getDivisionNameByRankNumber } from '../../helpers/valorant/rank';

export function Overview() {

    let option = {
        grid: {
            top: 0,
            left: 0,
            right: 0,
            height: '128px'
        },
        xAxis: {
            type: 'category',
            show: false
        },
        yAxis: {
            show: false,
        },
        series: [
            {
                name: "RADIANT",
                smooth: true,
                type: 'line',
                symbol: 'none',
                itemStyle: {
                    color: '#ffffaaff'
                },
                areaStyle: {
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#ffffaaff' },
                        { offset: 1, color: 'transparent' }
                    ])
                },
                data: [27,27,25],
                markPoint: {
                    data: [
                      { 
                        symbol: "image://https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/27/largeicon.png",
                        coord: [0,27],
                        symbolSize: 32,
                      }
                    ],
                },
            },
            {
                name: "INMORTAL",
                type: 'line',
                smooth: true,
                symbol: 'none',
                itemStyle: {
                    color: '#bb3d65ff'
                },
                areaStyle: {
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#bb3d65ff' },
                        { offset: 1, color: 'transparent' }
                    ])
                },
                data: [undefined,undefined,25,25,26,26,27],
                markPoint: {
                    data: [
                      { 
                        symbol: "image://https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/25/largeicon.png",
                        coord: [2,25],
                        symbolSize: 32,
                      },
                      { 
                        symbol: "image://https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/26/largeicon.png",
                        coord: [4,26],
                        symbolSize: 32,
                      },
                    ],
                },
            },
            {
                name: "RADIANT",
                type: 'line',
                symbol: 'none',
                itemStyle: {
                    color: '#ffffaaff'
                },
                areaStyle: {
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#ffffaaff' },
                        { offset: 1, color: 'transparent' }
                    ])
                },
                data: [undefined, undefined, undefined, undefined, undefined, undefined, 27,27,27],
                markPoint: {
                    data: [
                      { 
                        symbol: "image://https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/27/largeicon.png",
                        coord: [6,27],
                        symbolSize: 32,
                      }
                    ],
                },
            },
        ],
    };  
    return (
        <div className="w-full grid grid-cols-2 mb-4 overflow-hidden rounded-xl">
            <div className="col-span-2" id="overview-graph">
                <ReactECharts option={option} style={{height: '128px'}}/>
            </div>
        </div>
    )
}