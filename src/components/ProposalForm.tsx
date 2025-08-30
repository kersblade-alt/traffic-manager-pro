import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  background: ${({ theme }) => theme.colors.card};
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.18);
`;

const Field = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.label};
  font-size: 1rem;
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 7px;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 18px;
  transition: background 0.2s;
  &:hover {
    background: #fff2a9;
    color: ${({ theme }) => theme.colors.card};
  }
`;

const fields = [
  { name: "companyName", label: "Nome da Empresa", type: "text", required: true },
  { name: "responsible", label: "Nome do Responsável", type: "text" },
  { name: "cpf", label: "CPF", type: "text" },
  { name: "cnpj", label: "CNPJ", type: "text" },
  { name: "phone", label: "Telefone", type: "text" },
  { name: "email", label: "E-mail", type: "email" },
  { name: "whatsapp", label: "WhatsApp", type: "text" },
  { name: "website", label: "Website", type: "url" },
  { name: "segment", label: "Segmento/Nicho", type: "text" },
  { name: "address", label: "Endereço", type: "text" },
  { name: "socials", label: "Redes Sociais", type: "text" }
];

const initialState = fields.reduce((acc, cur) => ({ ...acc, [cur.name]: "" }), {});

const ProposalForm = () => {
  const [form, setForm] = useState(initialState);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Proposta pronta para preview (em breve)!\nAqui conectaremos preview, PDF, backup, etc.");
  }

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Field key={field.name}>
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            id={field.name}
            name={field.name}
            type={field.type}
            value={form[field.name]}
            onChange={handleChange}
            required={!!field.required}
          />
        </Field>
      ))}
      <Button type="submit">Gerar Proposta</Button>
    </Form>
  );
};

export default ProposalForm;
