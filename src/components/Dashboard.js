
import React, { Component } from 'react';
import {CarService} from '../service/CarService';
import {Panel} from 'primereact/panel';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {InputText} from 'primereact/inputtext';
import {Chart} from 'primereact/chart';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Schedule} from 'primereact/schedule';

import {ProgressBar} from 'primereact/progressbar';


export class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
            city: null,
            selectedCar: null,
            lineData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Robinhood',
                        data: [3802, 3689, 4350, 3253, 5534, 5700, 5230],
                        fill: false,
                        borderColor: '#38E599'
                    },
                    {
                        label: 'TD Ameritrade',
                        data: [2450, 2232, 3349, 4200, 3912, 4102, 3351],
                        fill: false,
                        borderColor: '#18BF1E'
                    },
                    {
                        label: 'Wells Fargo',
                        data: [1509, 3400, 2800, 5702, 6530, 6328, 7028],
                        fill: false,
                        borderColor: '#D60031'
                    },
                    {
                        label: 'Coinbase',
                        data: [723, 684, 630, 459, 380, 302, 205],
                        fill: false,
                        borderColor: '#1A58CC'
                    },
                    {
                        label: 'Cash',
                        data: [75, 150, 15, 25, 100, 65, 45],
                        fill: false,
                        borderColor: '#9A9FBA'
                    }
                ]
            },
            pieData: {
                labels: ['Robinhood','TD Ameritrade','Wells Fargo', 'Coinbase', 'Cash'],
                datasets: [
                    {
                        data: [5230, 3351, 7028, 205, 45],
                        backgroundColor: [
                            "#38E599",
                            "#18BF1E",
                            "#D60031",
                            "1A58CC",
                            "9A9FBA"
                        ],
                        hoverBackgroundColor: [
                            "#92E5C1",
                            "#65BF68",
                            "#D65573",
                            "6C8DCC",
                            "CECECE"
                        ]
                    }]
            }
        };

        this.onTaskChange = this.onTaskChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.carservice = new CarService();
    }

    onTaskChange(e) {
        let selectedTasks = [...this.state.tasks];
        if(e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        this.setState({tasks: selectedTasks});
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        let cities = [
            {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
            {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
            {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
            {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
            {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
        ];

        let scheduleHeader = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		};

        let events = [
			{
				"id": 1,
				"title": "All Day Event",
				"start": "2017-02-01"
			},
			{
				"id": 2,
				"title": "Long Event",
				"start": "2017-02-07",
				"end": "2017-02-10"
			},
			{
				"id": 3,
				"title": "Repeating Event",
				"start": "2017-02-09T16:00:00"
			},
			{
				"id": 4,
				"title": "Repeating Event",
				"start": "2017-02-16T16:00:00"
			},
			{
				"id": 5,
				"title": "Conference",
				"start": "2017-02-11",
				"end": "2017-02-13"
			},
			{
				"id": 6,
				"title": "Meeting",
				"start": "2017-02-12T10:30:00",
				"end": "2017-02-12T12:30:00"
			},
			{
				"id": 7,
				"title": "Lunch",
				"start": "2017-02-12T12:00:00"
			},
			{
				"id": 8,
				"title": "Meeting",
				"start": "2017-02-12T14:30:00"
			},
			{
				"id": 9,
				"title": "Happy Hour",
				"start": "2017-02-12T17:30:00"
			},
			{
				"id": 10,
				"title": "Dinner",
				"start": "2017-02-12T20:00:00"
			},
			{
				"id": 11,
				"title": "Birthday Party",
				"start": "2017-02-13T07:00:00"
			},
			{
				"id": 12,
				"title": "Click for Google",
				"url": "http://google.com/",
				"start": "2017-02-28"
			}
        ];

        return (
            <div className="p-grid p-fluid dashboard">
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Capital</span>
                        <span className="detail">Your total sum</span>
                        <span className="count visitors">$15,859</span>
                    </div>
                </div>
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Daily Change</span>
                        <span className="detail">Your percent change</span>
                        <span className="count purchases">+2.34%</span>
                    </div>
                </div>
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Today</span>
                        <span className="detail">Income for today</span>
                        <span className="count revenue">+$275</span>
                    </div>
                </div>



                <div className="p-col-12 p-md-6 p-xl-4">
                    <div className="slick">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#38E599',color:'#00448f'}}><span><img src="assets/layout/images/robinhood.png" alt="" width="70px"/></span>
                        </div>
                            <div className="highlight-details ">
                                <i className="pi pi-search"/>
                                <span>Robinhood</span>
                                <span className="count">$5,230</span>
                            </div>
                    </div>
                    </div>

                    <div className="slick">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#18BF1E',color:'#00448f'}}><span><img src="assets/layout/images/td.png" alt="" width="70px"/></span>
                        </div>
                            <div className="highlight-details ">
                                <i className="pi pi-search"/>
                                <span>TD Ameritrade</span>
                                <span className="count">$3,351</span>
                            </div>
                    </div>
                    </div>
                </div>

                <div className="p-col-12 p-md-6 p-xl-4">
                    <div className="slick">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#D60031',color:'#00448f'}}><span><img src="assets/layout/images/wellsfargo.png" alt="" width="70px"/></span>
                        </div>
                            <div className="highlight-details ">
                                <i className="pi pi-search"/>
                                <span>Wells Fargo</span>
                                <span className="count">$7,028</span>
                            </div>
                    </div>
                    </div>
                    <div className="slick">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#1A58CC',color:'#00448f'}}><span><img src="assets/layout/images/coinbase.png" alt="" width="70px"/></span>
                        </div>
                            <div className="highlight-details ">
                                <i className="pi pi-search"/>
                                <span>Coinbase</span>
                                <span className="count">$205</span>
                            </div>
                    </div>
                    </div>
                </div>


                <div className="p-col-12 p-md-6 p-xl-4">
                    <div className="slick">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#9A9FBA',color:'#00448f'}}><span><img src="assets/layout/images/cash.png" alt="" width="70px"/></span>
                        </div>
                            <div className="highlight-details ">
                                <i className="pi pi-search"/>
                                <span>Cash</span>
                                <span className="count">$45</span>
                            </div>
                    </div>
                    </div>
                </div>


                <div className="p-col-12 p-lg-6">
                    <div className="card">
                        <h1 className="centerText">Change</h1>
                        <Chart type="line" data={this.state.lineData}/>
                    </div>
                </div>

                <div className="p-col-12 p-lg-6">
                    <div className="card">
                        <h1 className="centerText">Breakdown</h1>
                        <Chart type="doughnut" data={this.state.pieData} height="150"/>
                    </div>
                </div>

                <div className="p-col-12 p-g-6">
                <div className="card">
                    <h1>Progress</h1>
                    <ProgressBar value={34}/>
                </div>
                </div>



            </div>
        );
    }
}
