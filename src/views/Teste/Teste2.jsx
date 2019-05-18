import React, { Component } from "react";
import { Table, Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";


const thArray = ["Prontuário", "Name compelto", "CPF", "Data de Nascimento", "Telefone", "E-mail", "CEP", "Endereço", "Número", "Complemento", "Bairro", "Cidade", "Estado"];
const tdArray = [
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"],
  ["10005789", "Thiago Nasciemnto Blizz Castro", "000.000.000-00", "14/12/1994", "(99) 99999-9999","Exemplo@email.com","30300-031","Av Jóse Barcelos","1215","Apto 402","Vila Militar","Belo Horizonte","Minas Gerais"]
];



class RegularTables extends Component {
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col >
              <Card
                title=""
                category=""
                tableFullWidth
                content={
                  <Table striped hover responsive>
                    <thead>
                      <tr>
                        {thArray.map((prop) => {
                          return <th>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop) => {
                        return (
                          <tr>
                            {prop.map((prop) => {
                              return <td>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default RegularTables;
