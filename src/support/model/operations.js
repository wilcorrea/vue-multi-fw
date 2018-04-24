import { main } from "../../infra/services/http";

export default $this => [
  {
    id: "save",
    label: "Salvar",
    type: "primary",
    handler: record => {
      main
        .post(record)
        .then(response => $this.$m.alert("Registro salvo com sucesso!"));
    }
  }
];
