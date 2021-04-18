import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data: { cases, recovered, deaths }, country }) => {
    const barChart = (
        cases ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        data: [cases, recovered, deaths],
                        label: 'People',
                        backgroundColor: [
                            'rgb(122, 127, 243)',
                            'rgb(186, 252, 165)',
                            'rgb(245, 153, 145)'
                        ],
                        borderWidth: 0
                          
                    }]
                }}
                options={{
                    title:{
                      display:true,
                      text:`${country} Reports`,
                      fontSize:16
                    },
                    legend:{
                      display:false,
                    }
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            {barChart}
        </div>
        
    );
}

export default Chart;