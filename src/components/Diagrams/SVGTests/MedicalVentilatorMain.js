import React from 'react'
import { Link, withRouter } from "react-router-dom";

function MedicalVentilatorMain({ match }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" width="1098px"
            height="594px" viewBox="-0.5 -0.5 1098 594"
            content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2020-07-29T17:24:24.420Z&quot; agent=&quot;5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36&quot; etag=&quot;TtbphCuQG8JZr6OrmjRU&quot; version=&quot;13.5.5&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;uMI8-UPcIuSwqPn-dbTl&quot; name=&quot;Page-1&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;">
            <defs>
                <linearGradient x1="0%" y1="0%" x2="0%" y2="100%" id="mx-gradient-ffffff-1-ffffff-1-s-0">
                    <stop offset="0%" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="100%" style={{ stopColor: '#FFFFFF' }} />
                </linearGradient>
            </defs>
            <g>
                <path d="M 582.5 458 L 582.5 526.63" fill="none" stroke="#000000" strokeMiterlimit="10"
                    pointerEvents="stroke" />
                <path d="M 582.5 531.88 L 579 524.88 L 582.5 526.63 L 586 524.88 Z" fill="#000000" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="all" />
                <Link to={`/svgtest2`} className="shadowing">
                    <rect x="505" y="218" width="155" height="240" rx="23.25" ry="23.25" fill="#647687" stroke="#666666"
                        pointerEvents="all" />
                    <rect x="562.5" y="328" width="40" height="20" fill="none" stroke="none" pointerEvents="all" />
                    <g transform="translate(-0.5 -0.5)">
                        <switch>
                            <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                                height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                <div xmlns="http://www.w3.org/1999/xhtml"
                                    style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '38px', height: '1px', paddingTop: '338px', marginLeft: '564px' }}>
                                    <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                        <div
                                            style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                            <font style={{ fontSize: '14px' }} color="#ffffff"><b>MCU</b></font>
                                        </div>
                                    </div>
                                </div>
                            </foreignObject><text x="583" y="342" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                                textAnchor="middle">MCU</text>
                        </switch>
                    </g>
                </Link>
                <rect x="150" y="263" width="150" height="60" rx="9" ry="9" fill="#60a917" stroke="#82b366"
                    pointerEvents="all" />
                <rect x="155" y="283" width="140" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '138px', height: '1px', paddingTop: '293px', marginLeft: '156px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: '14px' }} color="#ffffff"><b>Iso. Power Supply - PFC STage</b>
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="225" y="297" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">Iso. Power Supply - PFC...</text>
                    </switch>
                </g>
                <rect x="320" y="263" width="150" height="60" rx="9" ry="9" fill="#60a917" stroke="#82b366"
                    pointerEvents="all" />
                <rect x="322.5" y="283" width="145" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '143px', height: '1px', paddingTop: '293px', marginLeft: '324px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }} >
                                        <font style={{ fontSize: "14px" }} color="#ffffff"><b>Iso. Power Supply - LLC Converter</b>
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="395" y="297" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">Iso. Power Supply - LLC...</text>
                    </switch>
                </g>
                <rect x="150" y="343" width="150" height="60" rx="9" ry="9" fill="#60a917" stroke="#82b366"
                    pointerEvents="all" />
                <rect x="205" y="363" width="40" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '38px', height: '1px', paddingTop: '373px', marginLeft: '206px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: "14px" }} color="#ffffff"><b>Battery Management</b></font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="225" y="377" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">Batter...</text>
                    </switch>
                </g>
                <rect x="320" y="343" width="150" height="60" rx="9" ry="9" fill="#60a917" stroke="#82b366"
                    pointerEvents="all" />
                <rect x="375" y="363" width="40" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '38px', height: '1px', paddingTop: '373px', marginLeft: '376px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: "14px" }} color="#ffffff"><b>Power Management</b></font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="395" y="377" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">Power...</text>
                    </switch>
                </g>
                <rect x="332.5" y="0.5" width="150" height="60" rx="9" ry="9" fill="#647687" stroke="#666666"
                    pointerEvents="all" />
                <rect x="387.5" y="20.5" width="40" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '38px', height: '1px', paddingTop: '31px', marginLeft: '389px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font color="#ffffff" style={{ fontSize: "14px" }}><b>Valves</b></font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="408" y="34" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">Valves</text>
                    </switch>
                </g>
                <rect x="685" y="0.5" width="150" height="60" rx="9" ry="9" fill="#647687" stroke="#666666"
                    pointerEvents="all" />
                <rect x="705" y="20.5" width="110" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '108px', height: '1px', paddingTop: '31px', marginLeft: '706px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: "14px" }} color="#ffffff"><b>BLDC Air Pump</b></font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="760" y="34" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">BLDC Air Pump</text>
                    </switch>
                </g>
                <rect x="332.5" y="83" width="150" height="60" rx="9" ry="9" fill="#60a917" stroke="#82b366"
                    pointerEvents="all" />
                <path d="M 408 83 L 408 68.37" fill="none" stroke="#000000" strokeMiterlimit="10" pointerEvents="stroke" />
                <path d="M 408 63.12 L 411.5 70.12 L 408 68.37 L 404.5 70.12 Z" fill="#000000" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="all" />
                <rect x="340" y="103" width="135" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '133px', height: '1px', paddingTop: '113px', marginLeft: '341px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: "14px" }} color="#ffffff"><b>Valve Drive Module</b></font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="408" y="117" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">Valve Drive Module</text>
                    </switch>
                </g>
                <path d="M 760 83 L 760 66.87" fill="none" stroke="#000000" strokeMiterlimit="10" pointerEvents="stroke" />
                <path d="M 760 61.62 L 763.5 68.62 L 760 66.87 L 756.5 68.62 Z" fill="#000000" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="all" />
                <rect x="685" y="83" width="150" height="60" rx="9" ry="9" fill="#60a917" stroke="#82b366"
                    pointerEvents="all" />
                <rect x="691.25" y="103" width="137.5" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '136px', height: '1px', paddingTop: '113px', marginLeft: '692px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: "14px" }} color="#ffffff"><b>BLDC Drive Module</b></font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="760" y="117" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">BLDC Drive Module</text>
                    </switch>
                </g>
                <path d="M 125 243 L 485 243" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                    strokeDasharray="2 6" pointerEvents="stroke" />
                <path d="M 122.5 443 L 485 443" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                    strokeDasharray="2 6" pointerEvents="stroke" />
                <path d="M 125 443 L 125 240.5" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                    strokeDasharray="2 6" pointerEvents="stroke" />
                <path d="M 485 443 L 485 243" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                    strokeDasharray="2 6" pointerEvents="stroke" />
                <path d="M 70 293 L 148.63 293" fill="none" stroke="#000000" strokeMiterlimit="10" pointerEvents="stroke" />
                <path d="M 153.88 293 L 146.88 296.5 L 148.63 293 L 146.88 289.5 Z" fill="#000000" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="all" />
                <ellipse cx="35" cy="293" rx="35" ry="35" fill="url(#mx-gradient-ffffff-1-ffffff-1-s-0)" stroke="#000000"
                    pointerEvents="all" />
                <rect x="10" y="285.5" width="50" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '48px', height: '1px', paddingTop: '296px', marginLeft: '11px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: "14px" }}><b>AC IN</b></font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="35" y="299" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">AC IN</text>
                    </switch>
                </g>
                <rect x="105" y="413" width="390" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '388px', height: '1px', paddingTop: '423px', marginLeft: '106px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: '14px' }}><b>Power Supply &amp; Management</b></font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="300" y="427" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">Power Supply &amp; Management</text>
                    </switch>
                </g>
                <rect x="507.5" y="533" width="150" height="60" rx="9" ry="9" fill="#60a917" stroke="#82b366"
                    pointerEvents="all" />
                <rect x="512.5" y="553" width="140" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '138px', height: '1px', paddingTop: '563px', marginLeft: '514px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: "14px" }} color="#ffffff"><b>LCD Display and Touchscreen Drive</b>
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="583" y="567" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">LCD Display and Touchsc...</text>
                    </switch>
                </g>
                <rect x="717" y="245.5" width="150" height="60" rx="9" ry="9" fill="#60a917" stroke="#82b366"
                    pointerEvents="all" />
                <rect x="717" y="373" width="150" height="60" rx="9" ry="9" fill="#60a917" stroke="#82b366"
                    pointerEvents="all" />
                <rect x="885" y="245.5" width="150" height="60" rx="9" ry="9" fill="#60a917" stroke="#82b366"
                    pointerEvents="all" />
                <rect x="885" y="373" width="150" height="60" rx="9" ry="9" fill="#60a917" stroke="#82b366"
                    pointerEvents="all" />
                <rect x="772" y="265.5" width="40" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '38px', height: '1px', paddingTop: '276px', marginLeft: '773px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: "14px" }} color="#ffffff"><b>Wireless Connectivity</b></font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="792" y="279" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">Wirele...</text>
                    </switch>
                </g>
                <rect x="885" y="265.5" width="150" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '148px', height: '1px', paddingTop: '276px', marginLeft: '886px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: "14px" }} color="#ffffff"><b>Speaker Amplifier / Voice Commands</b>
                                        </font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="960" y="279" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">Speaker Amplifier / Voice...</text>
                    </switch>
                </g>
                <rect x="735" y="393" width="115" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '113px', height: '1px', paddingTop: '403px', marginLeft: '736px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: "14px" }} color="#ffffff"><b>Analog to Digital Conversion</b></font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="793" y="407" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">Analog to Digital C...</text>
                    </switch>
                </g>
                <rect x="940" y="393" width="40" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '38px', height: '1px', paddingTop: '403px', marginLeft: '941px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: "14px" }} color="#ffffff"><b>Amplification</b></font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="960" y="407" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">Amplif...</text>
                    </switch>
                </g>
                <rect x="885" y="453" width="150" height="60" rx="9" ry="9" fill="#647687" stroke="#666666"
                    pointerEvents="all" />
                <rect x="940" y="473" width="40" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '38px', height: '1px', paddingTop: '483px', marginLeft: '941px' }}>
                                <div style={{ boxSizing: 'border-box', fontSize: '0', textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: "14px" }} color="#ffffff"><b>Sensors</b></font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="960" y="487" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">Sensors</text>
                    </switch>
                </g>
                <path d="M 691 563 L 691.25 235.5" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                    strokeDasharray="2 6" pointerEvents="stroke" />
                <path d="M 1095 563 L 1095 233" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                    strokeDasharray="2 6" pointerEvents="stroke" />
                <path d="M 1095 562 L 685 562.41" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                    strokeDasharray="2 6" pointerEvents="stroke" />
                <path d="M 1095 233 L 691.25 233" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10"
                    strokeDasharray="2 6" pointerEvents="stroke" />
                <rect x="867" y="533" width="40" height="20" fill="none" stroke="none" pointerEvents="all" />
                <g transform="translate(-0.5 -0.5)">
                    <switch>
                        <foreignObject style={{ overflow: 'visible', textAlign: 'left' }} pointerEvents="none" width="100%"
                            height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style={{ display: 'flex', alignItems: 'unsafe center', justifyContent: 'unsafe center', width: '38px', height: '1px', paddingTop: '543px', marginLeft: '868px' }}>
                                <div style={{ boxSizing: 'border-box', 'fontSize': 0, textAlign: 'center' }}>
                                    <div
                                        style={{ display: 'inline-block', fontSize: '12px', fontFamily: 'Helvetica', color: '#000000', lineHeight: '1.2', pointerEvents: 'all', whiteSpace: 'normal', wordWrap: 'normal' }}>
                                        <font style={{ fontSize: "14px" }}><b>Processing</b></font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject><text x="887" y="547" fill="#000000" fontFamily="Helvetica" fontSize="12px"
                            textAnchor="middle">Proces...</text>
                    </switch>
                </g>
                <path d="M 543.75 218 L 543.93 193 Q 544 183 534 183 L 418 183 Q 408 183 407.88 173 L 407.58 149.37" fill="none"
                    stroke="#000000" strokeMiterlimit="10" pointerEvents="stroke" />
                <path d="M 407.51 144.12 L 411.1 151.07 L 407.58 149.37 L 404.1 151.16 Z" fill="#000000" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="all" />
                <path d="M 621.25 218 L 621.07 193 Q 621 183 631 183 L 750 183 Q 760 183 760 173 L 760 149.37" fill="none"
                    stroke="#000000" strokeMiterlimit="10" pointerEvents="stroke" />
                <path d="M 760 144.12 L 763.5 151.12 L 760 149.37 L 756.5 151.12 Z" fill="#000000" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="all" />
                <path d="M 708.63 278 L 666.37 278" fill="none" stroke="#000000" strokeMiterlimit="10"
                    pointerEvents="stroke" />
                <path d="M 713.88 278 L 706.88 281.5 L 708.63 278 L 706.88 274.5 Z" fill="#000000" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="all" />
                <path d="M 661.12 278 L 668.12 274.5 L 666.37 278 L 668.12 281.5 Z" fill="#000000" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="all" />
                <path
                    d="M 1035 275.5 L 1065 275.12 Q 1075 275 1075 285 L 1075 294 Q 1075 303 1075 313 L 1075 328 Q 1075 338 1065 338 L 666.37 338"
                    fill="none" stroke="#000000" strokeMiterlimit="10" pointerEvents="stroke" />
                <path d="M 661.12 338 L 668.12 334.5 L 666.37 338 L 668.12 341.5 Z" fill="#000000" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="all" />
                <path d="M 717 403 L 695 403 Q 685 403 675.68 403 L 666.37 403" fill="none" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="stroke" />
                <path d="M 661.12 403 L 668.12 399.5 L 666.37 403 L 668.12 406.5 Z" fill="#000000" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="all" />
                <path d="M 1035 483 L 1065 483 Q 1075 483 1075 473 L 1075 413 Q 1075 403 1065 403 L 1041.37 403" fill="none"
                    stroke="#000000" strokeMiterlimit="10" pointerEvents="stroke" />
                <path d="M 1036.12 403 L 1043.12 399.5 L 1041.37 403 L 1043.12 406.5 Z" fill="#000000" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="all" />
                <path d="M 885 403 L 875 403 Q 865 403 868.18 403 L 871.37 403" fill="none" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="stroke" />
                <path d="M 866.12 403 L 873.12 399.5 L 871.37 403 L 873.12 406.5 Z" fill="#000000" stroke="#000000"
                    strokeMiterlimit="10" pointerEvents="all" />
            </g>
            <switch>
                <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" /><a transform="translate(0,-5)"
                    href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text
                        textAnchor="middle" fontSize="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a>
            </switch>
        </svg>
    );
}

export default withRouter(MedicalVentilatorMain);