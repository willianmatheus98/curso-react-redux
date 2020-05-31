import React from "react";

export default (props) => {
  const alunos = props.alunos.map((aluno) => {
    return <li key={aluno.id} >{`${aluno.id}) nome: ${aluno.name}, nota: ${aluno.note}`}</li>;
  });

  return (
    <React.Fragment>
      <ul style={{ listStyle: 'none'}}>{alunos}</ul>
    </React.Fragment>
  );
};
