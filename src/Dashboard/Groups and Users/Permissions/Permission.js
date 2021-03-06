import React, { useState  } from 'react';
import MaterialTable from 'material-table'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'
import {MTableCell} from 'material-table';

import EditIcon from '@material-ui/icons/Edit';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import DeleteIcon from '@material-ui/icons/Delete';


const Permission = () => {

  // const [selectedRow] = useState(null);
  const [Tabledata, setTabledata] = useState([]);

  const columns = [
    { title: "Title", field: "athlete" ,
      cellStyle : {
        fontSize : '14px'
      },
      render: rowData => <Link> {rowData.athlete} </Link>
    },
    { title: "Approved Maahir", field: "age",
    
    cellStyle : {
      fontSize : '14px'
    } 
  },
    { title: "Pending Maahir", field: "country",
    cellStyle : {
      fontSize : '14px'
    }
   },
    { title: "Description", field: "year",
    cellStyle : {
      fontSize : '14px'
    }
   },
    { title: "Web Icon", field: "date" ,
    cellStyle : {
      fontSize : '14px'
    }
  },
    { title: "Mobile Icon", field: "sport" ,
    cellStyle : {
      fontSize : '14px'
    }
  },
    { title: "Actions", field: "" ,
    cellStyle : {
      fontSize : '14px'
    },
    render:() =>
                <div style={{width : '100px' , cursor:'pointer'}}>
                    <ZoomInIcon style={{ width :'20px', color:'lightblue',}} />
                    <EditIcon style={{ width :'20px', color:'green',marginLeft:'10px'}}/>
                    <DeleteIcon  style={{ width :'20px',marginLeft:'10px' , color:'red'}}/>
                </div>    
  }
    
  ]


    return (
        <>
            <div className="wrapper">
        {/* Navbar */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Permissions</h1>
                </div>
                
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item" ><Link to='Dashboard'>Home</Link></li>
                    <li className="breadcrumb-item" ><Link to='Permission'>Permissions </Link> </li>
                  </ol>
                </div>

                <div className='col-12'>
                  <hr></hr>
                </div>

                <div className='col-12 mt-3'>
                    <Link to='AddPermission'><button type="button" style={{width:'250px' , backgroundColor : '#fb9500' , border : 'none'}} class="btn btn-primary" ><i class="fas fa-plus"></i> Add New Permission  </button></Link> 
                </div>

                <div className='col-12'>
                  <hr></hr>
                </div>

                <div className='col-12'>

                </div>
                
                
              </div>
            </div>{/* /.container-fluid */}
          </section>
          {/* Main content */}
                <section className='content'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12'>
                                    <div className='col-12'>
                                            <div className='row'>
                                                <div className='col-10'>

                                                </div>
                                            </div>
                                    </div>
                                <Card >
                                    <div className='card-header' style={{backgroundColor: '#fb9500' , color : 'white'}}>
                                        <h3 class="card-title" style={{fontSize : "15px"}} >Results for "All Permissions"</h3>
                                    </div>

                                    
                                      <div className='' >
                                        <MaterialTable
                                          title=""
                                          columns={columns}
                                          // onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                                          options={
                                            // {
                                            // rowStyle: rowData => ({
                                            //   backgroundColor: (selectedRow === rowData.tableData.id) ? '#dff0d8' : '#FFF'
                                            // })},
                                            // //this is option section
                                            {
                                              exportButton: true,
                                              actionsColumnIndex: -1,
                                              addRowPosition : 'first',
                                              selection: true,
                                              rowStyle: x => {
                                                if (x.tableData.id % 2) {
                                                    return {backgroundColor: "#f2f2f2"}
                                                                        }
                                                            }
                                            }
                                          }
                                          editable= {
                                            {onRowAdd : newData =>
                                              new Promise((resolve, reject) => {
                                                  setTimeout(() => {
                                                      setTabledata([...Tabledata, newData]); 

                                                      resolve();
                                                  }, 1000);
                                              }),}
                                          }
                                          components={{
                                            Cell: props => (
                                              <MTableCell {...props} style={{ padding: '4px 8px 4px 8px' }} />
                                            ),
                                          }}
                                          

                                          data={ query =>
                                            new Promise((resolve, reject) => {


                                              
                                              // prepare your data and then call resolve like this:
                                               let url = 'http://localhost:3000/olympic?'
                                              //searching
                                              // if (query.search) {
                                              //   url += `q=${query.search}`
                                              // }
                                              //sorting 
                                              // if (query.orderBy) {
                                              //   url += `&_sort=${query.orderBy.field}&_order=${query.orderDirection}`
                                              // }
                                             
                                              //pagination
                                              // url += `&_page=${query.page + 1}`
                                              // url += `&_limit=${query.pageSize}`

                                              fetch(url)
                                              .then(resp =>resp.json())
                                                  
                                              .then(resp => {
                                                resolve({
                                                  data: resp,// your data array
                                                  page: query.page,// current page number
                                                  totalCount: 20// total row number
                                                });
                                              })

                                            })
                                          }
                                        />
                                      </div>
                                  </Card>
                            </div>
                        </div>
                    </div>



          </section>
          {/* /.content */}
        </div>
      </div>

        </>
    )
    }
export default Permission;