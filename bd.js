const produtos = [
  {
    "id": 1,
    "nome": "Smartphone Galaxy Z",
    "descricao": "Tela dobrável de 6.7 polegadas, 256GB de armazenamento.",
    "foto": "https://exemplo.com/fotos/galaxy-z.jpg",
    "categoria": "Celulares",
    "preco": 5499.00,
    "quantidade": 15
  },
  {
    "id": 2,
    "nome": "Fone de Ouvido Noise Cancelling",
    "descricao": "Cancelamento de ruído ativo e bateria de 40 horas.",
    "foto": "https://exemplo.com/fotos/fone-nc.jpg",
    "categoria": "Áudio",
    "preco": 1200.50,
    "quantidade": 30
  },
  {
    "id": 3,
    "nome": "Teclado Mecânico RGB",
    "descricao": "Switches azuis, layout ABNT2 com iluminação customizável.",
    "foto": "https://exemplo.com/fotos/teclado-rgb.jpg",
    "categoria": "Periféricos",
    "preco": 350.00,
    "quantidade": 50
  },
  {
    "id": 4,
    "nome": "Monitor 4K 27\"",
    "descricao": "Resolução Ultra HD com painel IPS e HDR10.",
    "foto": "https://exemplo.com/fotos/monitor-4k.jpg",
    "categoria": "Monitores",
    "preco": 2100.00,
    "quantidade": 10
  },
  {
    "id": 5,
    "nome": "Mouse Gamer Pro",
    "descricao": "16000 DPI, sensor óptico de alta precisão e 6 botões.",
    "foto": "https://exemplo.com/fotos/mouse-gamer.jpg",
    "categoria": "Periféricos",
    "preco": 280.00,
    "quantidade": 100
  },
  {
    "id": 6,
    "nome": "Notebook Ultra Slim",
    "descricao": "Processador i7, 16GB RAM, SSD 512GB.",
    "foto": "https://exemplo.com/fotos/notebook-slim.jpg",
    "categoria": "Computadores",
    "preco": 4800.00,
    "quantidade": 8
  },
  {
    "id": 7,
    "nome": "Smartwatch Sport",
    "descricao": "Monitoramento cardíaco, GPS integrado e à prova d'água.",
    "foto": "https://exemplo.com/fotos/smartwatch.jpg",
    "categoria": "Vestíveis",
    "preco": 850.00,
    "quantidade": 45
  },
  {
    "id": 8,
    "nome": "Câmera Mirrorless 4K",
    "descricao": "Sensor Full Frame com lente kit 24-70mm.",
    "foto": "https://exemplo.com/fotos/camera-4k.jpg",
    "categoria": "Fotografia",
    "preco": 9500.00,
    "quantidade": 5
  },
  {
    "id": 9,
    "nome": "Carregador Portátil 20000mAh",
    "descricao": "Carregamento rápido com duas saídas USB-C.",
    "foto": "https://exemplo.com/fotos/powerbank.jpg",
    "categoria": "Acessórios",
    "preco": 199.90,
    "quantidade": 120
  },
  {
    "id": 10,
    "nome": "Caixa de Som Bluetooth",
    "descricao": "Potência de 20W, resistente a respingos de água.",
    "foto": "https://exemplo.com/fotos/caixa-som.jpg",
    "categoria": "Áudio",
    "preco": 450.00,
    "quantidade": 60
  },
  {
    "id": 11,
    "nome": "Roteador Wi-Fi 6",
    "descricao": "Dual-band com tecnologia Mesh para grandes coberturas.",
    "foto": "https://exemplo.com/fotos/roteador.jpg",
    "categoria": "Redes",
    "preco": 620.00,
    "quantidade": 25
  },
  {
    "id": 12,
    "nome": "Webcam 1080p",
    "descricao": "Foco automático e microfone com redução de ruído.",
    "foto": "https://exemplo.com/fotos/webcam.jpg",
    "categoria": "Periféricos",
    "preco": 230.00,
    "quantidade": 40
  },
  {
    "id": 13,
    "nome": "SSD Interno 1TB NVMe",
    "descricao": "Velocidade de leitura de até 3500MB/s.",
    "foto": "https://exemplo.com/fotos/ssd-1tb.jpg",
    "categoria": "Hardware",
    "preco": 550.00,
    "quantidade": 85
  },
  {
    "id": 14,
    "nome": "Placa de Vídeo RTX",
    "descricao": "8GB VRAM GDDR6, suporte a Ray Tracing.",
    "foto": "https://exemplo.com/fotos/gpu-rtx.jpg",
    "categoria": "Hardware",
    "preco": 3200.00,
    "quantidade": 12
  },
  {
    "id": 15,
    "nome": "Cadeira Gamer Ergonômica",
    "descricao": "Reclinável com apoio lombar e de pescoço.",
    "foto": "https://exemplo.com/fotos/cadeira-gamer.jpg",
    "categoria": "Móveis",
    "preco": 1100.00,
    "quantidade": 20
  },
  {
    "id": 16,
    "nome": "Microfone Condensador USB",
    "descricao": "Ideal para streaming e podcasts, padrão cardioide.",
    "foto": "https://exemplo.com/fotos/microfone.jpg",
    "categoria": "Áudio",
    "preco": 380.00,
    "quantidade": 35
  },
  {
    "id": 17,
    "nome": "Tablet Pro 11\"",
    "descricao": "Suporte a caneta stylus e tela de 120Hz.",
    "foto": "https://exemplo.com/fotos/tablet-pro.jpg",
    "categoria": "Tablets",
    "preco": 3900.00,
    "quantidade": 18
  },
  {
    "id": 18,
    "nome": "Hub USB-C 7 em 1",
    "descricao": "Saída HDMI 4K, leitor de cartões e portas USB 3.0.",
    "foto": "https://exemplo.com/fotos/hub-usb.jpg",
    "categoria": "Acessórios",
    "preco": 150.00,
    "quantidade": 75
  },
  {
    "id": 19,
    "nome": "Console Next-Gen",
    "descricao": "Processamento gráfico de 12 Teraflops e SSD ultra rápido.",
    "foto": "https://exemplo.com/fotos/console.jpg",
    "categoria": "Games",
    "preco": 4500.00,
    "quantidade": 7
  },
  {
    "id": 20,
    "nome": "Lâmpada Inteligente RGB",
    "descricao": "Controle por voz e aplicativo, 16 milhões de cores.",
    "foto": "https://exemplo.com/fotos/lampada-smart.jpg",
    "categoria": "Casa Inteligente",
    "preco": 85.00,
    "quantidade": 200
  }
]

export {produtos}