/*eslint-disable*/
import React, { Component } from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

const dataTable = [
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"]
];

class ReactTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          Prontuario: prop[0],
          NameCompelto: prop[1],
          Cpf: prop[2],
          DataDeNascimento: prop[3],
          Telefone: prop[4],
          Email: prop[5],
          Cep: prop[6],
          Endereco: prop[7],
          Numero: prop[8],
          Complemento: prop[9],
          Bairro: prop[10],
          Cidade: prop[11],
          Estado: prop[12],

          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a like kind of action */}
              <Button
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  alert(
                    "You've clicked LIKE button on \n \n Prontuário: " +
                      obj.Prontuario +
                      "\n Name compelto: " +
                      obj.NameCompelto +
                      "\n CPF: " +
                      obj.Cpf +
                      "\n Data de Nascimento: " +
                      obj.DataDeNascimento +
                      "\n Telefone: " + 
                      obj.Telefone +
                      "\n Email: " + 
                      obj.Email +
                      "\n Cep: " + 
                      obj.Cep +
                      "\n Endereco: " + 
                      obj.Endereco +
                      "\n Complemento: " + 
                      obj.Complemento +
                      "\n Bairro: " + 
                      obj.Bairro +
                      "\n Cidade: " + 
                      obj.Cidade +
                      "\n Estado: " + 
                      obj.Estado 
                  );
                }}
                bsStyle="info"
                simple
                icon
              >
                <i className="fa fa-heart" />
              </Button>{" "}
              {/* use this button to add a edit kind of action */}
              <Button
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  alert(
                    "You've clicked EDIT button on \n \n Prontuario: " +
                      obj.Prontuario +
                      "\n Name Compelto: " +
                      obj.NameCompelto +
                      "\n CPF: " +
                      obj.Cpf +
                      "\n Data de Nascimento: " +
                      obj.DataDeNascimento + 
                      "\n Telefone: " +
                      obj.Telefone +
                      "\n Email: " + 
                      obj.Email +
                      "\n Cep: " + 
                      obj.Cep +
                      "\n Endereco: " + 
                      obj.Endereco +
                      "\n Complemento: " + 
                      obj.Complemento +
                      "\n Bairro: " + 
                      obj.Bairro +
                      "\n Cidade: " + 
                      obj.Cidade +
                      "\n Estado: " + 
                      obj.Estado 
                  );
                }}
                bsStyle="warning"
                simple
                icon
              >
                <i className="fa fa-edit" />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      console.log(data);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data: data });
                }}
                bsStyle="danger"
                simple
                icon
              >
                <i className="fa fa-times" />
              </Button>{" "}
            </div>
          )
        };
      })
    };
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>

              <Card
                title="DataTables.net"
                content={
                  <ReactTable
                    data={this.state.data}
                    filterable
                    columns={[
                      {
                        Header: "Prontuário",
                        accessor: "Prontuario"
                      },
                      {
                        Header: "Name Compelto",
                        accessor: "NameCompelto"
                      },
                      {
                        Header: "CPF",
                        accessor: "Cpf"
                      },
                      {
                        Header: "Data de Nascimento",
                        accessor: "DataDeNascimento"
                      },               
                      {
                        Header: "Telefone",
                        accessor: "Telefone"
                      },
                      {
                        Header: "Email",
                        accessor: "Email"
                      },
                      {
                        Header: "Cep",
                        accessor: "Cep"
                      },
                      {
                        Header: "Endereco",
                        accessor: "Endereco"
                      },
                      {
                        Header: "Numero",
                        accessor: "Numero"
                      },
                      {
                        Header: "Complemento",
                        accessor: "Complemento"
                      },
                      {
                        Header: "Bairro",
                        accessor: "Bairro"
                      },
                      {
                        Header: "Cidade",
                        accessor: "Cidade"
                      },
                      {
                        Header: "Estado",
                        accessor: "Estado"
                      },
                      {
                        Header: "Ações",
                        accessor: "actions",
                        sortable: false,
                        filterable: false
                      }

                    ]}
                    defaultPageSize={10}
                    showPaginationTop
                    showPaginationBottom={false}
                    className="-striped -highlight"
                  />
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ReactTables;
