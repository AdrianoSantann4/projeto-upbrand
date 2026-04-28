document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const telefoneInput = form.telefone;

  telefoneInput.addEventListener('input', () => {
    telefoneInput.value = telefoneInput.value.replace(/\D/g, '');
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const telefone = form.telefone.value.trim();

    if (!/^[0-9]+$/.test(telefone)) {
      alert('Digite apenas números no campo de telefone.');
      return;
    }

    const data = {
      nome: form.nome.value.trim(),
      email: form.email.value.trim(),
      telefone,
      empresa: form.empresa.value.trim(),
      mensagem: form.mensagem.value.trim()
    };

    try {
      const response = await fetch('http://localhost:3000/contatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`Erro ${response.status}`);
      }

      alert('Cadastro enviado com sucesso!');
      form.reset();
    } catch (error) {
      console.error('Falha ao cadastrar:', error);
      alert('Erro ao enviar. Verifique se o json-server está rodando em http://localhost:3000.');
    }
  });
});
