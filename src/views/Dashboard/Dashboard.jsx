import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table,
} from 'reactstrap';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    PanelHeader, Stats, CardCategory, Tasks
} from 'components';

import {
    dashboardPanelChart,
    dashboardShippedProductsChart,
    dashboardAllProductsChart,
    dashboard24HoursPerformanceChart
} from 'variables/charts.jsx';

import { tasks } from 'variables/general.jsx';

class Dashboard extends React.Component{
    render(){
        return (
            <div>
                <PanelHeader
                    size="lg"
                    content={
                        <Line data={dashboardPanelChart.data} options={dashboardPanelChart.options}/>
                    }
                />
                <div className="content">
                    <Row>
                        <Col xs={12} md={4}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardCategory>Current Month</CardCategory>
                                    <CardTitle>Performance MTD</CardTitle>
                                    <UncontrolledDropdown>
                                        <DropdownToggle className="btn-round btn-simple btn-icon" color="default">
                                            <i className="now-ui-icons loader_gear"></i>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                            <DropdownItem className="text-danger">Remove data</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Line data={dashboardShippedProductsChart.data} options={dashboardShippedProductsChart.options} />
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <Stats>
                                        {[
                                            { i: "now-ui-icons arrows-1_refresh-69", t: "Just Updated"}
                                        ]}
                                    </Stats>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardCategory>Current Year </CardCategory>
                                    <CardTitle>Performance YTD </CardTitle>
                                    <UncontrolledDropdown>
                                        <DropdownToggle className="btn-round btn-simple btn-icon" color="default">
                                            <i className="now-ui-icons loader_gear"></i>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                            <DropdownItem className="text-danger">Remove data</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Line data={dashboardAllProductsChart.data} options={dashboardAllProductsChart.options} />
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <Stats>
                                        {[
                                            { i: "now-ui-icons arrows-1_refresh-69", t: "Just Updated"}
                                        ]}
                                    </Stats>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardCategory>Last 24h</CardCategory>
                                    <CardTitle>Performance 24 Hours</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Bar data={dashboard24HoursPerformanceChart.data} options={dashboard24HoursPerformanceChart.options} />
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <Stats>
                                        {[
                                            { i: "now-ui-icons ui-2_time-alarm", t: "Last 7 days"}
                                        ]}
                                    </Stats>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={6}>
                        <Card className="card-tasks">
                          <CardHeader>
                            <CardTitle>Tasks</CardTitle>
                            <p className="category">Crypto News</p>
                          </CardHeader>
                          <CardBody>
                            <Tasks tasks={tasks}/>
                          </CardBody>
                          <CardFooter>
                            <hr />
                            <Stats>
                                {[
                                    { i: "now-ui-icons loader_refresh spin", t: "Updated 3 minutes ago"}
                                ]}
                            </Stats>
                          </CardFooter>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card>
                          <CardHeader>
                            <CardTitle>Crypto Prices</CardTitle>
                            <p className="category">From Coinmarketcap</p>
                          </CardHeader>
                          <CardBody>
                            <Table responsive>
                              <thead className=" text-primary">
                                <tr>
                                  <th>Currency</th>
                                <th>Price</th>
                                <th>Last 24h</th>
                                <th className="text-right">Market Cap</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>todo</td>
                                  <td>todo</td>
                                  <td>todo</td>
                                  <td className="text-right">todo</td>
                                </tr>
                              </tbody>
                            </Table>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard;
