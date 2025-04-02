var dados = [
['07h00-08h00', '', '', '', '', '', '', '303'],
['08h00-08h50', 'Sist. de Informação - TA  (até solução ar condicionado)', 'PPGGEA (Profa. Débora)-Somente dia 06/05', 'Sist. de Informação - TA  (até solução ar condicionado)', 'INTRO A COMPUTAÇAO - TA - P', 'PPGGEA (Profa. Débora)-Somente dia 09/05', '', '303'],
['08h50-09h40', 'Sist. de Informação - TA  (até solução ar condicionado)', 'PPGGEA (Profa. Débora)-Somente dia 06/05', 'Sist. de Informação - TA  (até solução ar condicionado)', 'INTRO A COMPUTAÇAO - TA - P', 'PPGGEA (Profa. Débora)-Somente dia 09/05', '', '303'],
['10h00-10h50', 'Sustentabilidade', 'PPGGEA (Profa. Débora)-Somente dia 06/05', '', 'INTRO A COMPUTAÇAO - TB - P', 'PPGGEA (Profa. Débora)-Somente dia 09/05', '', '303'],
['10h50-11h40', 'Sustentabilidade', 'PPGGEA (Profa. Débora)-Somente dia 06/05', '', 'INTRO A COMPUTAÇAO - TB - P', 'PPGGEA (Profa. Débora)-Somente dia 09/05', '', '303'],
['12h00-13h00', '', '', '', '', '', '', '303'],
['13h10-14h00', 'Sustentabilidade', 'INTRO A COMPUTAÇAO - TA - P', 'PPGGEA (Profa. Débora)-Somente dia 07/05', 'Controle Estatístico de Processo', 'PPGGEA (Profa. Débora)-Somente dia 09/05', '', '303'],
['14h00-14h50', 'Sustentabilidade', 'INTRO A COMPUTAÇAO - TA - P', 'PPGGEA (Profa. Débora)-Somente dia 07/05', 'Controle Estatístico de Processo', 'PPGGEA (Profa. Débora)-Somente dia 09/05', '', '303'],
['15h00-16h00', 'INTRO A COMPUTAÇAO - TD - T', 'INTRO A COMPUTAÇAO - TB - P', 'INTRO A COMPUTAÇAO - TD - T', 'Controle Estatístico de Processo', 'PPGGEA (Profa. Débora)-Somente dia 09/05', '', '303'],
['16h00-16h50', 'INTRO A COMPUTAÇAO - TD - T', 'INTRO A COMPUTAÇAO - TB - P', 'INTRO A COMPUTAÇAO - TD - T', 'Controle Estatístico de Processo', 'PPGGEA (Profa. Débora)-Somente dia 09/05', '', '303'],
['16h50-17h40', '', '', '', '', '', '', '303'],
['18h00-18h50', '', '', '', '', '', '', '303'],
['07h00-08h00', '', '', '', '', '', '', '304'],
['08h00-08h50', 'PPGGEA (Profa. Débora)-Somente dia 05/05', 'Fenômenos de Transportes - OBG', 'Fotogeologia e Sensoriamento remoto - Geologia', 'Métodos Estatísticos Aplicados à Geologia', 'Fenômenos de Transportes - OBG', '', '304'],
['08h50-09h40', 'PPGGEA (Profa. Débora)-Somente dia 05/05', 'Fenômenos de Transportes - OBG', 'Fotogeologia e Sensoriamento remoto - Geologia', 'Métodos Estatísticos Aplicados à Geologia', 'Fenômenos de Transportes - OBG', '', '304'],
['10h00-10h50', 'PPGGEA (Profa. Débora)-Somente dia 05/05', '', 'Fotogeologia e Sensoriamento remoto - Geologia', 'Métodos Estatísticos Aplicados à Geologia', '', '', '304'],
['10h50-11h40', 'PPGGEA (Profa. Débora)-Somente dia 05/05', '', 'Fotogeologia e Sensoriamento remoto - Geologia', 'Métodos Estatísticos Aplicados à Geologia', '', '', '304'],
['12h00-13h00', '', '', '', '', '', '', '304'],
['13h10-14h00', 'Pesquisa Operacional 1 - OBG', 'Topografia e Geodésia - GEO', 'Geoprocessamento - OBG', 'PPGGEA (Profa. Débora)-Somente dia 08/05', 'Hidráulica - OPT', '', '304'],
['14h00-14h50', 'Pesquisa Operacional 1 - OBG', 'Topografia e Geodésia - GEO', 'Geoprocessamento - OBG', 'PPGGEA (Profa. Débora)-Somente dia 08/05', 'Hidráulica - OPT', '', '304'],
['15h00-16h00', 'Pesquisa Operacional 1 - OBG', 'Topografia e Geodésia  - GEO', 'Geoprocessamento - OBG', 'PPGGEA (Profa. Débora)-Somente dia 08/05', 'Hidráulica - OPT', '', '304'],
['16h00-16h50', 'Pesquisa Operacional 1 - OBG', 'Topografia e Geodésia  - GEO', 'Geoprocessamento - OBG', 'PPGGEA (Profa. Débora)-Somente dia 08/05', 'Hidráulica - OPT', '', '304'],
['16h50-17h40', '', '', '', '', '', '', '304'],
['18h00-18h50', '', '', '', '', '', '', '304'],
['07h00-08h00', '', '', '', '', '', '', '403'],
['08h00-08h50', 'Sist. de Informação - TA ', 'Simulação de Sistemas', 'Sist. de Informação - TA ', 'PPGEP - Fund. de Ciência de Dados', '', '', '403'],
['08h50-09h40', 'Sist. de Informação - TA', 'Simulação de Sistemas', 'Sist. de Informação - TA', 'PPGEP - Fund. de Ciência de Dados', '', '', '403'],
['10h00-10h50', 'Sist. de Informação - TB', 'Simulação de Sistemas', 'Sist. de Informação - TB', 'PPGEP - Fund. de Ciência de Dados', '', '', '403'],
['10h50-11h40', 'Sist. de Informação - TB', 'Simulação de Sistemas', 'Sist. de Informação - TB', 'PPGEP - Fund. de Ciência de Dados', '', '', '403'],
['12h00-13h00', '', '', '', '', '', '', '403'],
['13h10-14h00', 'PPGGEA (Profa. Débora)-Somente dia 05/05', 'Pesquisa Operacional 1', 'PCPI', '', '', '', '403'],
['14h00-14h50', 'PPGGEA (Profa. Débora)-Somente dia 05/05', 'Pesquisa Operacional 1', 'PCPI', '', '', '', '403'],
['15h00-16h00', 'PPGGEA (Profa. Débora)-Somente dia 05/05', 'Pesquisa Operacional 1', 'PCPI', '', '', '', '403'],
['16h00-16h50', 'PPGGEA (Profa. Débora)-Somente dia 05/05', 'Pesquisa Operacional 1', 'PCPI', '', '', '', '403'],
['16h50-17h40', '', '', '', 'Planejamento e Controle da Produção 3', '', '', '403'],
['18h00-18h50', '', '', '', 'Planejamento e Controle da Produção 3', '', '', '403'],
['07h00-08h00', '', '', '', '', '', '', '109'],
['08h00-08h50', 'DESENHO TÉCNICO - GEO - TA', 'DESENHO TECNICO - EP - TC', 'DESENHO TÉCNICO - GEO - TA', '', '', '', '109'],
['08h50-09h40', 'DESENHO TÉCNICO - GEO - TA', 'DESENHO TECNICO - EP - TC', 'DESENHO TÉCNICO - GEO - TA', '', '', '', '109'],
['10h00-10h50', 'DESENHO TÉCNICO - GEO - TB', 'DESENHO TECNICO - EP - TC', 'DESENHO TÉCNICO - GEO - TB', '', '', '', '109'],
['10h50-11h40', 'DESENHO TÉCNICO - GEO - TB', 'DESENHO TECNICO - EP - TC', 'DESENHO TÉCNICO - GEO - TB', '', '', '', '109'],
['12h00-13h00', '', '', '', '', '', '', '109'],
['13h10-14h00', '', 'Projeto de Estradas - OBG', '', 'DESENHO TECNICO - EP - TD', 'SAÚDE E SEGURANÇA DO TRABALHO - TA', '', '109'],
['14h00-14h50', '', 'Projeto de Estradas - OBG', '', 'DESENHO TECNICO - EP - TD', 'SAÚDE E SEGURANÇA DO TRABALHO - TA', '', '109'],
['15h00-16h00', '', 'Projeto de Estradas - OBG', '', 'DESENHO TECNICO - EP - TD', 'Planejamento de terminais de passageiros aeroportuários - NL', '', '109'],
['16h00-16h50', '', 'Projeto de Estradas - OBG', '', 'DESENHO TECNICO - EP - TD', 'Planejamento de terminais de passageiros aeroportuários - NL', '', '109'],
['16h50-17h40', '', '', '', '', '', '', '109'],
['18h00-18h50', '', '', '', '', '', '', '109'],
['07h00-08h00', '', '', '', '', '', '', '103'],
['08h00-08h50', '', '', '', '', '', '', '103'],
['08h50-09h40', '', '', '', '', '', '', '103'],
['10h00-10h50', '', '', '', '', '', '', '103'],
['10h50-11h40', '', '', '', '', '', '', '103'],
['12h00-13h00', '', '', '', '', '', '', '103'],
['13h10-14h00', '', '', '', '', '', '', '103'],
['14h00-14h50', '', '', '', '', '', '', '103'],
['15h00-16h00', '', '', '', '', '', '', '103'],
['16h00-16h50', '', '', '', '', '', '', '103'],
['16h50-17h40', '', '', '', '', '', '', '103'],
['18h00-18h50', '', '', '', '', '', '', '103'],
['07h00-08h00', '', '', '', '', '', '', '105'],
['08h00-08h50', '', '', '', '', '', '', '105'],
['08h50-09h40', '', '', '', '', '', '', '105'],
['10h00-10h50', '', '', '', '', '', '', '105'],
['10h50-11h40', '', '', '', '', '', '', '105'],
['12h00-13h00', '', '', '', '', '', '', '105'],
['13h10-14h00', '', '', '', '', '', '', '105'],
['14h00-14h50', '', '', '', '', '', '', '105'],
['15h00-16h00', '', '', '', '', '', '', '105'],
['16h00-16h50', '', '', '', '', '', '', '105'],
['16h50-17h40', '', '', '', '', '', '', '105'],
['18h00-18h50', '', '', '', '', '', '', '105'],
['07h00-08h00', '', '', '', '', '', '', '106'],
['08h00-08h50', 'GEOLOGIA DOS COMBÚSTIVEIS FÓSSEIS', '', '', '', '', '', '106'],
['08h50-09h40', 'GEOLOGIA DOS COMBÚSTIVEIS FÓSSEIS', '', '', '', '', '', '106'],
['10h00-10h50', 'GEOLOGIA DOS COMBÚSTIVEIS FÓSSEIS', '', '', '', '', '', '106'],
['10h50-11h40', 'GEOLOGIA DOS COMBÚSTIVEIS FÓSSEIS', '', '', '', '', '', '106'],
['12h00-13h00', '', '', '', '', '', '', '106'],
['13h10-14h00', '', '', '', '', '', '', '106'],
['14h00-14h50', '', '', '', '', '', '', '106'],
['15h00-16h00', '', '', '', '', '', '', '106'],
['16h00-16h50', '', '', '', '', '', '', '106'],
['16h50-17h40', '', '', '', '', '', '', '106'],
['18h00-18h50', '', '', '', '', '', '', '106'],
['07h00-08h00', '', '', '', '', '', '', '207'],
['08h00-08h50', 'GEOLOGIA BÁSICA - TA', 'Geologia Ambiental ', 'GEOLOGIA BÁSICA - TA', '', '', '', '207'],
['08h50-09h40', 'GEOLOGIA BÁSICA - TA', 'Geologia Ambiental ', 'GEOLOGIA BÁSICA - TA', '', '', '', '207'],
['10h00-10h50', 'GEOLOGIA BÁSICA - TB', 'Geologia Ambiental ', 'GEOLOGIA BÁSICA - TB', '', '', '', '207'],
['10h50-11h40', 'GEOLOGIA BÁSICA - TB', 'Geologia Ambiental ', 'GEOLOGIA BÁSICA - TB', '', '', '', '207'],
['12h00-13h00', '', '', '', '', '', '', '207'],
['13h10-14h00', 'Instrumentação e Desenho Geológico', 'GEOLOGIA ESTRUTURAL', '', 'GEOLOGIA ESTRUTURAL', 'Instrumentação e Desenho Geológico', '', '207'],
['14h00-14h50', 'Instrumentação e Desenho Geológico', 'GEOLOGIA ESTRUTURAL', '', 'GEOLOGIA ESTRUTURAL', 'Instrumentação e Desenho Geológico', '', '207'],
['15h00-16h00', 'Instrumentação e Desenho Geológico', 'LAB. GEOLOGIA ESTRUTURAL', '', 'LAB. GEOLOGIA ESTRUTURAL', 'Instrumentação e Desenho Geológico', '', '207'],
['16h00-16h50', 'Instrumentação e Desenho Geológico', '', '', '', 'Instrumentação e Desenho Geológico', '', '207'],
['16h50-17h40', '', '', '', '', '', '', '207'],
['18h00-18h50', '', '', '', '', '', '', '207'],
['07h00-08h00', '', '', '', '', '', '', '305'],
['08h00-08h50', '', '', '', '', '', '', '305'],
['08h50-09h40', '', '', '', '', '', '', '305'],
['10h00-10h50', '', '', '', '', '', '', '305'],
['10h50-11h40', '', '', '', '', '', '', '305'],
['12h00-13h00', '', '', '', '', '', '', '305'],
['13h10-14h00', '', '', '', '', '', '', '305'],
['14h00-14h50', '', '', '', '', '', '', '305'],
['15h00-16h00', '', '', '', '', '', '', '305'],
['16h00-16h50', '', '', '', '', '', '', '305'],
['16h50-17h40', '', '', '', '', '', '', '305'],
['18h00-18h50', '', '', '', '', '', '', '305'],
['07h00-08h00', '', '', '', '', '', '', '306'],
['08h00-08h50', '', '', '', '', '', '', '306'],
['08h50-09h40', '', '', '', '', '', '', '306'],
['10h00-10h50', '', '', '', '', '', '', '306'],
['10h50-11h40', '', '', '', '', '', '', '306'],
['12h00-13h00', '', '', '', '', '', '', '306'],
['13h10-14h00', '', '', '', '', '', '', '306'],
['14h00-14h50', '', '', '', '', '', '', '306'],
['15h00-16h00', '', '', '', '', '', '', '306'],
['16h00-16h50', '', '', '', '', '', '', '306'],
['16h50-17h40', '', '', '', '', '', '', '306'],
['18h00-18h50', '', '', '', '', '', '', '306'],
['07h00-08h00', '', '', '', '', '', '', '307'],
['08h00-08h50', '', 'Petr. e Petrografia de Rochas Sedimentares', 'Mineralogia 1', '', 'Petr. e Petrografia de Rochas Igneas', '', '307'],
['08h50-09h40', '', 'Petr. e Petrografia de Rochas Sedimentares', 'Mineralogia 1', '', 'Petr. e Petrografia de Rochas Igneas', '', '307'],
['10h00-10h50', '', 'Petr. e Petrografia de Rochas Sedimentares', '', '', 'Petr. e Petrografia de Rochas Igneas', '', '307'],
['10h50-11h40', '', 'Petr. e Petrografia de Rochas Sedimentares', '', '', 'Petr. e Petrografia de Rochas Igneas', '', '307'],
['12h00-13h00', '', '', '', '', '', '', '307'],
['13h10-14h00', 'Petr. e Petrografia de Rochas Metamórficas', '', 'Mineralogia 1', 'Petrologia Metamórfica', '', '', '307'],
['14h00-14h50', 'Petr. e Petrografia de Rochas Metamórficas', '', 'Mineralogia 1', 'Petrologia Metamórfica', '', '', '307'],
['15h00-16h00', 'Petr. e Petrografia de Rochas Metamórficas', '', 'Mineralogia 1', '', '', '', '307'],
['16h00-16h50', 'Petr. e Petrografia de Rochas Metamórficas', '', 'Mineralogia 1', '', '', '', '307'],
['16h50-17h40', '', '', '', '', '', '', '307'],
['18h00-18h50', '', '', '', '', '', '', '307'],
['07h00-08h00', '', '', '', '', '', '', '206'],
['08h00-08h50', '', '', '', '', '', '', '206'],
['08h50-09h40', '', '', '', '', '', '', '206'],
['10h00-10h50', '', '', '', '', '', '', '206'],
['10h50-11h40', '', '', '', '', '', '', '206'],
['12h00-13h00', '', '', '', '', '', '', '206'],
['13h10-14h00', '', '', '', '', '', '', '206'],
['14h00-14h50', '', '', '', '', '', '', '206'],
['15h00-16h00', '', '', '', '', '', '', '206'],
['16h00-16h50', '', '', '', '', '', '', '206'],
['16h50-17h40', '', '', '', '', '', '', '206'],
['18h00-18h50', '', '', '', '', '', '', '206'],
['07h00-08h00', '', '', '', '', '', '', '404'],
['08h00-08h50', '', '', '', '', '', '', '404'],
['08h50-09h40', '', '', '', '', '', '', '404'],
['10h00-10h50', '', '', '', '', '', '', '404'],
['10h50-11h40', '', '', '', '', '', '', '404'],
['12h00-13h00', '', '', '', '', '', '', '404'],
['13h10-14h00', '', '', '', '', '', '', '404'],
['14h00-14h50', '', '', '', '', '', '', '404'],
['15h00-16h00', '', '', '', '', '', '', '404'],
['16h00-16h50', '', '', '', '', '', '', '404'],
['16h50-17h40', '', '', '', '', '', '', '404'],
['18h00-18h50', '', '', '', '', '', '', '404'],
['07h00-08h00', '', '', '', '', '', '', '503A'],
['08h00-08h50', 'PM Cerâmicos (André)', '', 'PM Cerâmicos (André)', 'REUNIAO COLEGIADO PROD', '', '', '503A'],
['08h50-09h40', 'PM Cerâmicos (André)', '', 'PM Cerâmicos (André)', 'REUNIAO COLEGIADO PROD', '', '', '503A'],
['10h00-10h50', 'Optativa Logística', 'Gestão da Qualidade', 'Gestão de Projetos', 'REUNIAO COLEGIADO PROD', '', '', '503A'],
['10h50-11h40', 'Optativa Logística', 'Gestão da Qualidade', 'Gestão de Projetos', '', '', '', '503A'],
['12h00-13h00', '', '', '', '', '', '', '503A'],
['13h10-14h00', '', 'Optativa TA em Sustentabilidade', 'PCP1', 'PROJETO DE TERMINAIS DE PASSAGEIROS', '', '', '503A'],
['14h00-14h50', '', 'Optativa TA em Sustentabilidade', 'PCP1', 'PROJETO DE TERMINAIS DE PASSAGEIROS', '', '', '503A'],
['15h00-16h00', '', '', 'PCP1', 'PROJETO DE TERMINAIS DE PASSAGEIROS', '', '', '503A'],
['16h00-16h50', '', '', 'PCP1', 'PROJETO DE TERMINAIS DE PASSAGEIROS', '', '', '503A'],
['16h50-17h40', '', '', '', 'Planejamento e Controle da Produção 3', '', '', '503A'],
['18h00-18h50', '', '', '', 'Planejamento e Controle da Produção 3', '', '', '503A'],
['07h00-08h00', '', '', '', '', '', '', 'T02'],
['08h00-08h50', '', '', '', '', '', '', 'T02'],
['08h50-09h40', '', '', '', '', '', '', 'T02'],
['10h00-10h50', '', '', '', '', '', '', 'T02'],
['10h50-11h40', '', '', '', '', '', '', 'T02'],
['12h00-13h00', '', '', '', '', '', '', 'T02'],
['13h10-14h00', '', '', '', '', '', '', 'T02'],
['14h00-14h50', '', '', '', '', '', '', 'T02'],
['15h00-16h00', '', '', '', '', '', '', 'T02'],
['16h00-16h50', '', '', '', '', '', '', 'T02'],
['16h50-17h40', '', '', '', '', '', '', 'T02'],
['18h00-18h50', '', '', '', '', '', '', 'T02'],
['07h00-08h00', '', '', '', '', '', '', '203'],
['08h00-08h50', '', '', '', '', '', '', '203'],
['08h50-09h40', '', '', '', '', '', '', '203'],
['10h00-10h50', '', '', '', '', '', '', '203'],
['10h50-11h40', '', '', '', '', '', '', '203'],
['12h00-13h00', '', '', '', '', '', '', '203'],
['13h10-14h00', '', '', '', '', '', '', '203'],
['14h00-14h50', '', '', '', '', '', '', '203'],
['15h00-16h00', '', '', '', '', '', '', '203'],
['16h00-16h50', '', '', '', '', '', '', '203'],
['16h50-17h40', '', '', '', '', '', '', '203'],
['18h00-18h50', '', '', '', '', '', '', '203'],
['07h00-08h00', '', '', '', '', '', '', '204'],
['08h00-08h50', 'Técnicas de Modelagem em Transportes - OBG', '', '', '', '', '', '204'],
['08h50-09h40', 'Técnicas de Modelagem em Transportes - OBG', '', '', '', '', '', '204'],
['10h00-10h50', 'Técnicas de Modelagem em Transportes - OBG', '', '', '', '', '', '204'],
['10h50-11h40', 'Técnicas de Modelagem em Transportes - OBG', '', '', '', '', '', '204'],
['12h00-13h00', '', '', '', '', '', '', '204'],
['13h10-14h00', 'Projeto de Sistemas de Transportes 1 - OBG', '', '', 'Segurança Viária - OPT', '', '', '204'],
['14h00-14h50', 'Projeto de Sistemas de Transportes 1 - OBG', '', '', 'Segurança Viária - OPT', '', '', '204'],
['15h00-16h00', '', '', '', 'Segurança Viária - OPT', '', '', '204'],
['16h00-16h50', '', '', '', 'Segurança Viária - OPT', '', '', '204'],
['16h50-17h40', '', '', '', '', '', '', '204'],
['18h00-18h50', '', '', '', '', '', '', '204'],
['07h00-08h00', '', '', '', '', '', '', '205'],
['08h00-08h50', '', '', '', '', '', '', '205'],
['08h50-09h40', '', '', '', '', '', '', '205'],
['10h00-10h50', '', '', '', '', '', '', '205'],
['10h50-11h40', '', '', '', '', '', '', '205'],
['12h00-13h00', '', '', '', '', '', '', '205'],
['13h10-14h00', '', '', '', '', '', '', '205'],
['14h00-14h50', '', '', '', '', '', '', '205'],
['15h00-16h00', '', '', '', '', '', '', '205'],
['16h00-16h50', '', '', '', '', '', '', '205'],
['16h50-17h40', '', '', '', '', '', '', '205'],
['18h00-18h50', '', '', '', '', '', '', '205'],
['07h00-08h00', '', '', '', '', '', '', 'MINI-AUDITÓRIO'],
['08h00-08h50', '', '', '', '', '', '', 'MINI-AUDITÓRIO'],
['08h50-09h40', '', '', '', '', '', '', 'MINI-AUDITÓRIO'],
['10h00-10h50', '', '', '', '', '', '', 'MINI-AUDITÓRIO'],
['10h50-11h40', '', '', '', '', '', '', 'MINI-AUDITÓRIO'],
['12h00-13h00', '', '', '', '', '', '', 'MINI-AUDITÓRIO'],
['13h10-14h00', '', '', '', '', '', '', 'MINI-AUDITÓRIO'],
['14h00-14h50', '', '', '', '', '', '', 'MINI-AUDITÓRIO'],
['15h00-16h00', '', '', '', '', '', '', 'MINI-AUDITÓRIO'],
['16h00-16h50', '', '', '', '', '', '', 'MINI-AUDITÓRIO'],
['16h50-17h40', '', '', '', '', '', '', 'MINI-AUDITÓRIO'],
['18h00-18h50', '', '', '', '', '', '', 'MINI-AUDITÓRIO'],
['07h00-08h00', '', '', '', '', '', '', '102'],
['08h00-08h50', 'GEOLOGIA  COLEGIADO', '', '', '', '', '', '102'],
['08h50-09h40', 'GEOLOGIA  COLEGIADO', '', '', '', '', '', '102'],
['10h00-10h50', 'GEOLOGIA  COLEGIADO', '', '', '', '', '', '102'],
['10h50-11h40', 'GEOLOGIA  COLEGIADO', '', '', '', '', '', '102'],
['12h00-13h00', 'GEOLOGIA  COLEGIADO', '', '', '', '', '', '102'],
['13h10-14h00', '', '', '', '', '', '', '102'],
['14h00-14h50', '', '', '', '', '', '', '102'],
['15h00-16h00', '', '', '', '', '', '', '102'],
['16h00-16h50', '', '', '', '', '', '', '102'],
['16h50-17h40', '', '', '', '', '', '', '102'],
['18h00-18h50', '', '', '', '', '', '', '102'],
['07h00-08h00', '', '', '', '', '', '', '202'],
['08h00-08h50', '', '', 'PPGEP - Seminários', '', '', '', '202'],
['08h50-09h40', '', '', 'PPGEP - Seminários', '', '', '', '202'],
['10h00-10h50', '', '', 'Gestão de Projetos', '', '', '', '202'],
['10h50-11h40', '', '', 'Gestão de Projetos', '', '', '', '202'],
['12h00-13h00', '', '', '', '', '', '', '202'],
['13h10-14h00', '', '', 'INTRODUÇÃO À TRIBOLOGIA', '', '', '', '202'],
['14h00-14h50', '', '', 'INTRODUÇÃO À TRIBOLOGIA', '', '', '', '202'],
['15h00-16h00', '', '', 'INTRODUÇÃO À TRIBOLOGIA', '', '', '', '202'],
['16h00-16h50', '', '', 'INTRODUÇÃO À TRIBOLOGIA', '', '', '', '202'],
['16h50-17h40', '', '', '', '', '', '', '202'],
['18h00-18h50', '', '', '', '', '', '', '202'],
['07h00-08h00', '', '', '', '', '', '', '302'],
['08h00-08h50', '', '', '', 'PPGGEA (Profa. Débora)-Somente dia 08/05', '', '', '302'],
['08h50-09h40', '', '', '', 'PPGGEA (Profa. Débora)-Somente dia 08/05', '', '', '302'],
['10h00-10h50', '', '', '', 'PPGGEA (Profa. Débora)-Somente dia 08/05', '', '', '302'],
['10h50-11h40', '', '', '', 'PPGGEA (Profa. Débora)-Somente dia 08/05', '', '', '302'],
['12h00-13h00', '', '', '', '', '', '', '302'],
['13h10-14h00', 'Processos Sedimentares', 'PPGGEA (Profa. Débora)-Somente dia 06/05', '', '', '', '', '302'],
['14h00-14h50', 'Processos Sedimentares', 'PPGGEA (Profa. Débora)-Somente dia 06/05', '', '', '', '', '302'],
['15h00-16h00', 'Petrologia Ígnea', 'PPGGEA (Profa. Débora)-Somente dia 06/05', '', '', '', '', '302'],
['16h00-16h50', 'Petrologia Ígnea', 'PPGGEA (Profa. Débora)-Somente dia 06/05', '', '', '', '', '302'],
['16h50-17h40', '', '', '', '', '', '', '302'],
['18h00-18h50', '', '', '', '', '', '', '302'],
['07h00-08h00', '', '', '', '', '', '', '402'],
['08h00-08h50', 'PPGGEA-AMB CÁRSTICOS - 16/06 e 23/06', 'PPGGEA-AMB CÁRSTICOS - 17/06', '', '', 'PPGGEA-AGROGEOLOGIA-20/06', '', '402'],
['08h50-09h40', 'PPGGEA-AMB CÁRSTICOS - 16/06 e 23/06', 'PPGGEA-AMB CÁRSTICOS - 17/06', '', '', 'PPGGEA-AGROGEOLOGIA-20/06', '', '402'],
['10h00-10h50', 'PPGGEA-AMB CÁRSTICOS - 16/06 e 23/06', 'PPGGEA-AMB CÁRSTICOS - 17/06', '', '', 'PPGGEA-AGROGEOLOGIA-20/06', '', '402'],
['10h50-11h40', 'PPGGEA-AMB CÁRSTICOS - 16/06 e 23/06', 'PPGGEA-AMB CÁRSTICOS - 17/06', '', '', 'PPGGEA-AGROGEOLOGIA-20/06', '', '402'],
['12h00-13h00', '', '', '', '', '', '', '402'],
['13h10-14h00', '', '', '', '', '', '', '402'],
['14h00-14h50', 'PPGGEA-AMB CÁRSTICOS - 16/05 e 16/06 ', 'PPGGEA-AMB CÁRSTICOS - 17/06', '', '', 'PPGGEA-AGROGEOLOGIA-20/06', '', '402'],
['15h00-16h00', 'PPGGEA-AMB CÁRSTICOS - 16/05 e 16/06 ', 'PPGGEA-AMB CÁRSTICOS - 17/06', '', '', 'PPGGEA-AGROGEOLOGIA-20/06', '', '402'],
['16h00-16h50', 'PPGGEA-AMB CÁRSTICOS - 16/05 e 16/06 ', 'PPGGEA-AMB CÁRSTICOS - 17/06', '', '', 'PPGGEA-AGROGEOLOGIA-20/06', '', '402'],
['16h50-17h40', 'PPGGEA-AMB CÁRSTICOS - 16/05 e 16/06 ', 'PPGGEA-AMB CÁRSTICOS - 17/06', '', '', 'PPGGEA-AGROGEOLOGIA-20/06', '', '402'],
['18h00-18h50', '', '', '', '', '', '', '402'],
['07h00-08h00', '', '', '', '', '', '', '502'],
['08h00-08h50', '', '', '', '', '', '', '502'],
['08h50-09h40', '', '', '', '', '', '', '502'],
['10h00-10h50', '', '', '', '', '', '', '502'],
['10h50-11h40', '', '', '', '', '', '', '502'],
['12h00-13h00', '', '', '', '', '', '', '502'],
['13h10-14h00', '', '', '', '', '', '', '502'],
['14h00-14h50', '', '', '', '', '', '', '502'],
['15h00-16h00', '', '', '', '', '', '', '502'],
['16h00-16h50', '', '', '', '', '', '', '502'],
['16h50-17h40', '', '', '', '', '', '', '502'],
['18h00-18h50', '', '', '', '', '', '', '502'],
['07h00-08h00', '', '', '', '', '', '', '108'],
['08h00-08h50', 'GEOMETRIA ANALITICA -T', 'QUIMICA GERAL B - T', 'GEOMETRIA ANALITICA -T', '', 'QUIMICA GERAL B - T', '', '108'],
['08h50-09h40', 'GEOMETRIA ANALITICA -T', 'QUIMICA GERAL B - T', 'GEOMETRIA ANALITICA -T', '', 'QUIMICA GERAL B - T', '', '108'],
['10h00-10h50', 'GEOMETRIA ANALITICA - P', 'QUIMICA GERAL B - G', 'GEOMETRIA ANALITICA - P', '', 'QUIMICA GERAL B - G', '', '108'],
['10h50-11h40', 'GEOMETRIA ANALITICA - P', 'QUIMICA GERAL B - G', 'GEOMETRIA ANALITICA - P', '', 'QUIMICA GERAL B - G', '', '108'],
['12h00-13h00', '', '', '', '', '', '', '108'],
['13h10-14h00', 'CÁLCULO 1A-TA', ' MET. DA PESQUISA GEOCIENTÍFICA', 'CÁLCULO 1A-TA', '', 'CÁLCULO 1A-TA', '', '108'],
['14h00-14h50', 'CÁLCULO 1A-TA', ' MET. DA PESQUISA GEOCIENTÍFICA', 'CÁLCULO 1A-TA', '', 'CÁLCULO 1A-TA', '', '108'],
['15h00-16h00', 'CÁLCULO 1A-TB', ' GEOLOGIA E O COTIDIANO ', 'CÁLCULO 1A-TB', '', 'CÁLCULO 1A-TB', '', '108'],
['16h00-16h50', 'CÁLCULO 1A-TB', ' GEOLOGIA E O COTIDIANO ', 'CÁLCULO 1A-TB', '', 'CÁLCULO 1A-TB', '', '108'],
['16h50-17h40', '', '', '', '', '', '', '108'],
['18h00-18h50', '', '', '', '', '', '', '108'],
['07h00-08h00', '', '', '', '', '', '', '208'],
['08h00-08h50', 'PROBABILIDADE E ESTATISTICA - PT', 'SAÚDE E SEGURANÇA DO TRABALHO - TB', 'PROBABILIDADE E ESTATISTICA - PT', '', 'Metrologia', '', '208'],
['08h50-09h40', 'PROBABILIDADE E ESTATISTICA - PT', 'SAÚDE E SEGURANÇA DO TRABALHO - TB', 'PROBABILIDADE E ESTATISTICA - PT', '', 'Metrologia', '', '208'],
['10h00-10h50', 'PROBABILIDADE E ESTATISTICA - PG', 'ÉTICA E SOCIOLOGIA - TA - PTG', 'PROBABILIDADE E ESTATISTICA - PG', '', 'Mecânica Aplicada', '', '208'],
['10h50-11h40', 'PROBABILIDADE E ESTATISTICA - PG', 'ÉTICA E SOCIOLOGIA - TA - PTG', 'PROBABILIDADE E ESTATISTICA - PG', '', 'Mecânica Aplicada', '', '208'],
['12h00-13h00', '', '', '', '', '', '', '208'],
['13h10-14h00', 'CÁLCULO 2A - reoferta', 'ÉTICA E SOCIOLOGIA - TA - PTG', 'CÁLCULO 2A - reoferta', '', 'CÁLCULO 2A - reoferta', '', '208'],
['14h00-14h50', 'CÁLCULO 2A - reoferta', 'ÉTICA E SOCIOLOGIA - TA - PTG', 'CÁLCULO 2A - reoferta', '', 'CÁLCULO 2A - reoferta', '', '208'],
['15h00-16h00', 'CÁLCULO 1A - TC ', '', 'CÁLCULO 1A - TC ', '', 'CÁLCULO 1A - TC ', '', '208'],
['16h00-16h50', 'CÁLCULO 1A - TC ', '', 'CÁLCULO 1A - TC ', '', 'CÁLCULO 1A - TC ', '', '208'],
['16h50-17h40', '', '', '', '', '', '', '208'],
['18h00-18h50', '', '', '', '', '', '', '208'],
['07h00-08h00', '', '', '', '', '', '', '308'],
['08h00-08h50', 'CIENCIA DOS MATERIAIS 2', '', 'CIENCIA DOS MATERIAIS 2', '', '', '', '308'],
['08h50-09h40', 'CIENCIA DOS MATERIAIS 2', '', 'CIENCIA DOS MATERIAIS 2', '', '', '', '308'],
['10h00-10h50', 'CÁLCULO 3A', 'Metodologia Científica - OBG', 'CÁLCULO 3A', '', 'Introdução a Eng de Produção', '', '308'],
['10h50-11h40', 'CÁLCULO 3A', 'Metodologia Científica - OBG', 'CÁLCULO 3A', '', 'Introdução a Eng de Produção', '', '308'],
['12h00-13h00', '', '', '', '', '', '', '308'],
['13h10-14h00', 'CÁLCULO 3B', 'Geografia, Transporte e Sociedade - OBG', 'CÁLCULO 3B', '', 'Introdução a Eng de Produção', '', '308'],
['14h00-14h50', 'CÁLCULO 3B', 'Geografia, Transporte e Sociedade - OBG', 'CÁLCULO 3B', '', 'Introdução a Eng de Produção', '', '308'],
['15h00-16h00', '', 'Geografia, Transporte e Sociedade - OBG', 'Introdução à Economia', '', 'Introdução à Economia', '', '308'],
['16h00-16h50', '', 'Geografia, Transporte e Sociedade - OBG', 'Introdução à Economia', '', 'Introdução à Economia', '', '308'],
['16h50-17h40', '', '', '', '', '', '', '308'],
['18h00-18h50', '', '', '', '', '', '', '308'],
['07h00-08h00', '', '', '', '', '', '', '504'],
['08h00-08h50', 'FÍSICA I - reoferta', 'FÍSICA I - reoferta', 'FÍSICA I - reoferta', '', 'FÍSICA I - reoferta', '', '504'],
['08h50-09h40', 'FÍSICA I - reoferta', 'FÍSICA I - reoferta', 'FÍSICA I - reoferta', '', 'FÍSICA I - reoferta', '', '504'],
['10h00-10h50', 'FÍSICA III - T', 'FÍSICA II - PG', 'FÍSICA III - T', '', 'FÍSICA II - PG', '', '504'],
['10h50-11h40', 'FÍSICA III - T', 'FÍSICA II - PG', 'FÍSICA III - T', '', 'FÍSICA II - PG', '', '504'],
['12h00-13h00', '', '', '', '', '', '', '504'],
['13h10-14h00', '', 'Organização do Trabalho ', 'Empreendedorismo', '', 'ÉTICA E SOCIOLOGIA - TA - PM', '', '504'],
['14h00-14h50', '', 'Organização do Trabalho ', 'Empreendedorismo', '', 'ÉTICA E SOCIOLOGIA - TA - PM', '', '504'],
['15h00-16h00', '', 'Organização do Trabalho ', '', '', 'ÉTICA E SOCIOLOGIA - TA - T', '', '504'],
['16h00-16h50', '', 'Organização do Trabalho ', '', '', 'ÉTICA E SOCIOLOGIA - TA - T', '', '504'],
['16h50-17h40', '', 'Trabalho de Conclusão de Curso 1', '', '', '', '', '504'],
['18h00-18h50', '', 'Trabalho de Conclusão de Curso 1', '', '', '', '', '504'],
['07h00-08h00', '', '', '', '', '', '', '505'],
['08h00-08h50', 'Gestão da Qualidade', 'FT 1 - EP', 'Gestão da Qualidade', '', 'Laboratório de Tecnologia Aeroviária - OPT', '', '505'],
['08h50-09h40', 'Gestão da Qualidade', 'FT 1 - EP', 'Gestão da Qualidade', '', 'Laboratório de Tecnologia Aeroviária - OPT', '', '505'],
['10h00-10h50', 'Plan. integrado de sist. de transportes - OBG', 'FT 1 - EP', 'Plan. integrado de sist. de transportes - OBG', '', 'Tecnologia Aeroviária  - OBG', '', '505'],
['10h50-11h40', 'Plan. integrado de sist. de transportes - OBG', 'FT 1 - EP', 'Plan. integrado de sist. de transportes - OBG', '', 'Tecnologia Aeroviária - OBG', '', '505'],
['12h00-13h00', '', '', '', '', '', '', '505'],
['13h10-14h00', 'Energia e Eletricidade ', 'Pesquisa Operacional 1 - P', 'Transporte e Planejamento Urbano e Regional - OBG', 'Processos de Fabricação 1', 'RESISTÊNCIA DOS MATERIAIS - PT', '', '505'],
['14h00-14h50', 'Energia e Eletricidade ', 'Pesquisa Operacional 1 - P', 'Transporte e Planejamento Urbano e Regional - OBG', 'Processos de Fabricação 1', 'RESISTÊNCIA DOS MATERIAIS - PT', '', '505'],
['15h00-16h00', 'Energia e Eletricidade ', 'Pesquisa Operacional 1 - P', '', 'Processos de Fabricação 1', 'RESISTÊNCIA DOS MATERIAIS - PT', '', '505'],
['16h00-16h50', 'Energia e Eletricidade ', 'Pesquisa Operacional 1 - P', '', 'Processos de Fabricação 1', 'RESISTÊNCIA DOS MATERIAIS - PT', '', '505'],
['16h50-17h40', '', '', '', '', '', '', '505'],
['18h00-18h50', '', '', '', '', '', '', '505'],
['07h00-08h00', '', '', '', '', '', '', '506'],
['08h00-08h50', '', 'Fundamentos de Administração', 'Gestao de Projetos de Sistemas de Transportes - OBG', '', 'Ergonomia e Engenharia no Trabalho', '', '506'],
['08h50-09h40', '', 'Fundamentos de Administração', 'Gestao de Projetos de Sistemas de Transportes - OBG', '', 'Ergonomia e Engenharia no Trabalho', '', '506'],
['10h00-10h50', '', 'Gestão da Qualidade', 'Transporte e Meio Ambiente 1 - OBG', '', 'Ergonomia e Engenharia no Trabalho', '', '506'],
['10h50-11h40', '', 'Gestão da Qualidade', 'Transporte e Meio Ambiente 1 - OBG', '', 'Ergonomia e Engenharia no Trabalho', '', '506'],
['12h00-13h00', '', '', '', '', '', '', '506'],
['13h10-14h00', 'Introdução à Engenharia da Materiais', 'Aspectos Econômicos do Transporte - OBG', 'Ciências do Ambiente', 'Transporte e Desenvolvimento - OPT', 'Operação de Sistemas de transportes 1  - OBG', '', '506'],
['14h00-14h50', 'Introdução à Engenharia da Materiais', 'Aspectos Econômicos do Transporte - OBG', 'Ciências do Ambiente', 'Transporte e Desenvolvimento - OPT', 'Operação de Sistemas de transportes 1  - OBG', '', '506'],
['15h00-16h00', '', 'Aspectos Econômicos do Transporte - OBG', '', 'Transporte e Desenvolvimento - OPT', 'Operação de Sistemas de transportes 1 - OBG', '', '506'],
['16h00-16h50', '', 'Aspectos Econômicos do Transporte - OBG', '', 'Transporte e Desenvolvimento - OPT', 'Operação de Sistemas de transportes 1  - OBG', '', '506'],
['16h50-17h40', '', '', '', '', '', '', '506'],
['18h00-18h50', '', '', '', '', '', '', '506'],
['07h00-08h00', '', '', '', '', '', '', '507'],
['08h00-08h50', 'INFERÊNCIA', 'Projeto de Ferrovias - OBG', 'INFERÊNCIA', 'Engenharia Econômica', 'P. M. Metálicos', '', '507'],
['08h50-09h40', 'INFERÊNCIA', 'Projeto de Ferrovias - OBG', 'INFERÊNCIA', 'Engenharia Econômica', 'P. M. Metálicos', '', '507'],
['10h00-10h50', 'P. M. Poliméricos', 'Projeto de Ferrovias - OBG', 'P. M. Poliméricos', 'Engenharia Econômica', 'P. M. Metálicos', '', '507'],
['10h50-11h40', 'P. M. Poliméricos', 'Projeto de Ferrovias - OBG', 'P. M. Poliméricos', 'Engenharia Econômica', 'P. M. Metálicos', '', '507'],
['12h00-13h00', '', '', '', '', '', '', '507'],
['13h10-14h00', 'Termodinâmica dos Materiais', 'Regulação de Servicos de Transportes - OBG', 'Termodinâmica dos Materiais', 'TA em Engenharia Econômica', 'Transformação de Fase em Materiais', '', '507'],
['14h00-14h50', 'Termodinâmica dos Materiais', 'Regulação de Servicos de Transportes - OBG', 'Termodinâmica dos Materiais', 'TA em Engenharia Econômica', 'Transformação de Fase em Materiais', '', '507'],
['15h00-16h00', '', 'Regulação de Servicos de Transportes - OBG', '', '', 'Transformação de Fase em Materiais', '', '507'],
['16h00-16h50', '', 'REgulação de Servicos de Transportes - OBG', '', '', 'Transformação de Fase em Materiais', '', '507'],
['16h50-17h40', '', '', '', '', '', '', '507'],
['18h00-18h50', '', '', '', '', '', '', '507'],
['07h00-08h00', '', '', '', '', '', '', '508'],
['08h00-08h50', 'Laboratório de Tecnologia Rodoviária - OPT', 'Pavimentação - OBG', 'Tópicos especiais de geologia estrutural ', '', '', '', '508'],
['08h50-09h40', 'Laboratório de Tecnologia Rodoviária - OPT', 'Pavimentação - OBG', 'Tópicos especiais de geologia estrutural ', '', '', '', '508'],
['10h00-10h50', 'Tecnologia Rodoviária - OBG', 'Pavimentação - OBG', 'Tópicos especiais de geologia estrutural ', '', 'Fundamentos de Contabilidade', '', '508'],
['10h50-11h40', 'Tecnologia Rodoviária - OBG', 'Pavimentação - OBG', 'Tópicos especiais de geologia estrutural ', '', 'Fundamentos de Contabilidade', '', '508'],
['12h00-13h00', '', '', '', '', '', '', '508'],
['13h10-14h00', 'Transporte Não Motorizado - OBG', 'Engenharia de Tráfego 2 - OBG', 'GEOQUÍMICA', 'Controle Estatístico de Processo', 'GEOLOGIA HISTÓRICA', '', '508'],
['14h00-14h50', 'Transporte Não Motorizado - OBG', 'Engenharia de Tráfego 2 - OBG', 'GEOQUÍMICA', 'Controle Estatístico de Processo', 'GEOLOGIA HISTÓRICA', '', '508'],
['15h00-16h00', '', 'Engenharia de Tráfego 2 - OBG', 'GEOQUÍMICA', 'Controle Estatístico de Processo', 'GEOLOGIA HISTÓRICA', '', '508'],
['16h00-16h50', '', 'Engenharia de Tráfego 2 - OBG', 'GEOQUÍMICA', 'Controle Estatístico de Processo', 'GEOLOGIA HISTÓRICA', '', '508'],
['16h50-17h40', '', '', '', '', '', '', '508'],
['18h00-18h50', '', '', '', '', '', '', '508'],
];