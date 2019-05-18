import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Grid,
  Row,
  Col
} from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import UserCard from "components/Card/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/default-avatar.png";

class UserPage extends Component {
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Novo Paciente"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-sm-3", "col-sm-6", "col-sm-3"]}
                      proprieties={[
                        {
                          label: "Prontuario",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: "10005789",
                          disabled: true
                        },
                        {
                          label: "Nome Completo",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Digite aqui o nome completo",
                          defaultValue: "Thiago Nasciemnto Blizz Castro"
                        },
                        {
                          label: "CPF",
                          type: "text",
                          bsClass: "form-control cpf-mask",
                          placeholder: "Número do CPF",
                          defaultValue: "000.000.000-00"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-sm-4", "col-sm-4","col-sm-4"]}
                      proprieties={[
                        {
                          label: "Data de nascimento",
                          type: "date",
                          bsClass: "form-control"
                        },
                        {
                          label: "Telefone",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Número de Telefone",
                          defaultValue: "(99) 99999-9999"
                        },
                        {
                          label: "E-mail",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Endereço de E-mail",
                          defaultValue: "Exemplo@email.com"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-sm-2", "col-sm-5", "col-sm-2", "col-sm-3"]}
                      proprieties={[
                        {
                          label: "CEP",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "CEP",
                          defaultValue: "30300-031"
                        },
                        {
                          label: "Endereço",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Rua / Av ",
                          defaultValue: "Av Jóse Barcelos"
                        },
                        {
                          label: "Número",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Número",
                          defaultValue: "1215"
                        },
                        {
                          label: "Complemento",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Apto / Casa",
                          defaultValue: "Apto 402"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-sm-4", "col-sm-4", "col-sm-4"]}
                      proprieties={[
                        {
                          label: "Bairro",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nome do Bairro",
                          defaultValue: "Vila Militar"
                        },
                        {
                          label: "Cidade",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Cidade",
                          defaultValue: "Belo Horizonte"
                        },
                        {
                          label: "Estado",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Estado",
                          defaultValue: "Minas Gerais"
                        }
                      ]}
                    />

                    <div className="row">
                      <div className="col-md-12">
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Observação:</ControlLabel>
                          <FormControl
                            rows="3"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <Button bsStyle="success" pullRight fill type="submit">
                      Salvar
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Tania Andrew"
                userName="tania123"
                description={
                  <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserPage;
