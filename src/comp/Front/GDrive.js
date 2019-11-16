import React, { PureComponent } from 'react'

class GDrive extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <h1>Google Drive Link</h1>
                <a href="https://drive.google.com/open?id=1-01jKarsocWF4uTLRx4Kmh_rVBz_vENt" onClick={()=>{alert('BOM💣')}}>Click me, Stacy</a>

                <br/>
                <h2>Want to do it for Oracle?</h2>
                <h6>Search for connection string of spring boot for oracle, and update it at application.properties</h6>

<br/>
                <h2>IDE's</h2>
                <ul>
                    <li>VS Code for react</li>
                    <li>STS - spring boot </li>
                </ul>
                
                <h2>I just want to launch your project</h2>
                <ul>
                    VS Code -> Navigate to react project
                    <li>npm i </li>
                    <li>npm start</li>
                    <li>Errors? contact me at email</li>
                </ul>
                <ul>
                    STS -> backend 
                    <li>visit application.properties and update 3 fields known as username,password,name of database</li>
                </ul>

                <ul>MySQL
                <li>create Table of which id is String while description is String too</li>
                <li>do not forget to insert records yourself, duhhhh?</li>
                </ul>

<br/>
                <h2>Steps for adding more tables</h2>

                <h3>BACKEND using sts-springboot</h3>
                <ul>Package warning
                <li>copy same package and paste it under test.table2</li>
                <li>tree is<br/> test, <br/>   test.hello,  <br/> test.task,<br/>  test.table2,<br/>  test.table3</li>
                <li>test.hello ensures that backend is working even if there is null connection to database</li>
                </ul>
                <br/>
                <ul>Copy and paste package
                <li>keep repository, do not contact me if you change the data field of String to Integer</li>
                <li>keep repository, most likely to change classname from task to whatever your class is</li>
                <li>keep service</li>
                <li>controller-> update api keys</li>
                <li>Class-> keep @Id, update name of initial variable</li>
                <li>1- delete all (empty and full constructors) and (getters and setters) </li>
                <li>2-  @Id String id; ... add your datatypes and variables</li>
                <li>3- auto generate 1) empty constructor 2) full constructor 3) getters and setters</li>
                </ul>
                <h3>need knowledge of react hooks</h3>
                <ul>
                    <li>fields: id,description</li>
                    <li>alter name of fields or add more fields, duhhh?</li>
                    <li>contact me if there is any problem (:</li>
                </ul>
                <h3>mysql? basic knowledge of </h3>
                <ul>
                    <li>create table query</li>
                    <li>insert table query</li>
                </ul>
            </div>
        )
    }
}

export default GDrive