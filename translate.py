import json
from bs4 import BeautifulSoup
import re

html_file = "index.html"
with open(html_file, "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

translations = {
    "en": {},
    "pt": {},
    "fr": {}
}

# The English to Portuguese and French map
trans_map = {
    "MAAS GEO ENERGY | MNMAAS Angola Operations | Since 2018": {
        "pt": "MAAS GEO ENERGY | Operações MNMAAS Angola | Desde 2018",
        "fr": "MAAS GEO ENERGY | Opérations MNMAAS Angola | Depuis 2018"
    },
    "Sobre": { "en": "About", "pt": "Sobre", "fr": "À propos" },
    "Serviços": { "en": "Services", "pt": "Serviços", "fr": "Services" },
    "Projectos": { "en": "Projects", "pt": "Projectos", "fr": "Projets" },
    "Capacidade": { "en": "Capability", "pt": "Capacidade", "fr": "Capacité" },
    "Contacto": { "en": "Contact", "pt": "Contacto", "fr": "Contact" },
    "Solicitar Cotação": { "en": "Request Quote", "pt": "Solicitar Cotação", "fr": "Demander un devis" },
    "Água • Energia • Geotecnia • Perfuração • Infraestrutura": { "en": "Water • Energy • Geotech • Drilling • Infrastructure", "pt": "Água • Energia • Geotecnia • Perfuração • Infraestrutura", "fr": "Eau • Énergie • Géotechnique • Forage • Infrastructure" },
    "Integrated solutions for ": { "en": "Integrated solutions for ", "pt": "Soluções integradas para ", "fr": "Solutions intégrées pour " },
    "Water, Energy & Infrastructure": { "en": "Water, Energy & Infrastructure", "pt": "Água, Energia e Infraestrutura", "fr": "Eau, Énergie et Infrastructure" },
    "MAAS GEO ENERGY delivers field-proven engineering services across solar infrastructure, borewell drilling, pump and tank systems, geotechnical anchoring, grouting, soil nailing, infrastructure and mining support. In Angola, we operate through MNMAAS Prestação de Serviços, (SU), LDA.": {
        "pt": "A MAAS GEO ENERGY fornece serviços de engenharia comprovados no campo em infraestrutura solar, perfuração de poços, sistemas de bombas e tanques, ancoragem geotécnica, injeção, pregagem de solo, infraestrutura e suporte de mineração. Em Angola, operamos através da MNMAAS Prestação de Serviços, (SU), LDA.",
        "fr": "MAAS GEO ENERGY fournit des services d'ingénierie éprouvés sur le terrain dans l'infrastructure solaire, le forage de puits, les systèmes de pompes et de réservoirs, l'ancrage géotechnique, l'injection, le clouage du sol, l'infrastructure et le soutien minier. En Angola, nous opérons via MNMAAS Prestação de Serviços, (SU), LDA."
    },
    "Falar no WhatsApp": { "en": "Talk on WhatsApp", "pt": "Falar no WhatsApp", "fr": "Parler sur WhatsApp" },
    "Ver Serviços": { "en": "View Services", "pt": "Ver Serviços", "fr": "Voir les services" },
    "Registered in India": { "pt": "Registada na Índia", "fr": "Enregistré en Inde" },
    "Drilling Capacity": { "pt": "Capacidade de Perfuração", "fr": "Capacité de forage" },
    "Angola Provinces": { "pt": "Províncias de Angola", "fr": "Provinces d'Angola" },
    "Core Divisions": { "pt": "Divisões Principais", "fr": "Divisions Principales" },
    "Core Services": { "pt": "Serviços Principais", "fr": "Services Principaux" },
    "Premium execution partner for water, solar and geotechnical works": { "pt": "Parceiro de execução premium para obras hídricas, solares e geotécnicas", "fr": "Partenaire d'exécution premium pour les travaux liés à l'eau, au solaire et à la géotechnique" },
    "Our services are structured for EPC companies, NGOs, farms, mining companies, government projects and private developers.": { "pt": "Nossos serviços são estruturados para empresas EPC, ONGs, fazendas, mineradoras, projetos governamentais e desenvolvedores privados.", "fr": "Nos services sont structurés pour les entreprises EPC, les ONG, les fermes, les sociétés minières, les projets gouvernementaux et les développeurs privés." },
    "Borewell & Water Systems": { "pt": "Poços e Sistemas de Água", "fr": "Puits de forage et Systèmes d'eau" },
    "Complete borewell solutions from drilling to pump and tank installation.": { "pt": "Soluções completas de poços, desde a perfuração até a instalação de bombas e tanques.", "fr": "Solutions complètes de puits de forage, du forage à l'installation de pompes et de réservoirs." },
    "DTH and mud drilling": { "pt": "Perfuração DTH e lama", "fr": "Forage MFT et boue" },
    "Submersible pump installation": { "pt": "Instalação de bomba submersível", "fr": "Installation de pompe submersible" },
    "Water tanks and distribution": { "pt": "Tanques de água e distribuição", "fr": "Réservoirs d'eau et distribution" },
    "Solar Infrastructure": { "pt": "Infraestrutura Solar", "fr": "Infrastructure Solaire" },
    "Utility-scale solar project execution support with real field experience.": { "pt": "Suporte de execução de projeto solar em escala de utilidade com experiência real em campo.", "fr": "Soutien à l'exécution de projets solaires à l'échelle des services publics avec une expérience réelle sur le terrain." },
    "Foundations and pile works": { "pt": "Fundações e trabalhos de estacas", "fr": "Fondations et travaux de pieux" },
    "Mounting structure installation": { "pt": "Instalação de estrutura de montagem", "fr": "Installation de structure de montage" },
    "Module mounting and cabling support": { "pt": "Montagem de módulo e suporte de cabeamento", "fr": "Montage de module et support de câblage" },
    "Geotechnical Works": { "pt": "Obras Geotécnicas", "fr": "Travaux Géotechniques" },
    "Ground stabilization and foundation support for infrastructure projects.": { "pt": "Estabilização de solo e suporte de fundação para projetos de infraestrutura.", "fr": "Stabilisation des sols et support de fondation pour les projets d'infrastructure." },
    "Soil nailing and anchoring": { "pt": "Pregagem e ancoragem de solo", "fr": "Clouage des sols et ancrage" },
    "Pressure grouting": { "pt": "Injeção sob pressão", "fr": "Injection sous pression" },
    "Slope stabilization": { "pt": "Estabilização de taludes", "fr": "Stabilisation de pente" },
    "About MAAS": { "pt": "Sobre a MAAS", "fr": "À propos de MAAS" },
    "One brand. Multi-country execution capability.": { "pt": "Uma marca. Capacidade de execução em vários países.", "fr": "Une marque. Capacité d'exécution multi-pays." },
    "MAAS AND CO was registered in India in 2018 and built practical field experience in solar foundation, drilling and infrastructure works. The Angola operation is represented by MNMAAS Prestação de Serviços, (SU), LDA.": { "pt": "A MAAS AND CO foi registada na Índia em 2018 e construiu experiência prática no campo em fundações solares, perfurações e obras de infraestrutura. A operação em Angola é representada pela MNMAAS Prestação de Serviços, (SU), LDA.", "fr": "MAAS AND CO a été enregistrée en Inde en 2018 et a acquis une expérience pratique sur le terrain dans les fondations solaires, les forages et les travaux d'infrastructure. L'opération angolaise est représentée par MNMAAS Prestação de Serviços, (SU), LDA." },
    "Our positioning is simple: reliable field execution with modern equipment, skilled manpower, safety discipline and strong project delivery focus.": { "pt": "Nosso posicionamento é simples: execução de campo confiável com equipamentos modernos, mão de obra qualificada, disciplina de segurança e forte foco na entrega do projeto.", "fr": "Notre positionnement est simple : une exécution fiable sur le terrain avec des équipements modernes, une main-d'œuvre qualifiée, une discipline de sécurité et une forte concentration sur la livraison des projets." },
    "✓ India registered company": { "pt": "✓ Empresa registada na Índia", "fr": "✓ Entreprise enregistrée en Inde" },
    "✓ Angola legal operation": { "pt": "✓ Operação legal em Angola", "fr": "✓ Opération légale en Angola" },
    "✓ Solar + drilling + geotech": { "pt": "✓ Solar + perfuração + geotecnia", "fr": "✓ Solaire + forage + géotechnique" },
    "✓ All provinces coverage": { "pt": "✓ Cobertura de todas as províncias", "fr": "✓ Couverture de toutes les provinces" },
    "Since 2018": { "pt": "Desde 2018", "fr": "Depuis 2018" },
    "MAAS AND CO India | MNMAAS Angola Operations": { "pt": "MAAS AND CO Índia | Operações MNMAAS Angola", "fr": "MAAS AND CO Inde | Opérations MNMAAS Angola" },
    "Company Credentials": { "pt": "Credenciais da Empresa", "fr": "Références de l'Entreprise" },
    "Registered, documented and ready for professional projects": { "pt": "Registado, documentado e pronto para projetos profissionais", "fr": "Enregistré, documenté et prêt pour des projets professionnels" },
    "Use this section to build client trust before meetings, tenders and NGO/project proposals.": { "pt": "Use esta seção para construir a confiança do cliente antes de reuniões, licitações e propostas de ONGs/projetos.", "fr": "Utilisez cette section pour renforcer la confiance des clients avant les réunions, les appels d'offres et les propositions d'ONG/projets." },
    "India registered business under GST.": { "pt": "Negócio registado na Índia sob GST.", "fr": "Entreprise enregistrée en Inde sous GST." },
    "Government of India registration credential.": { "pt": "Credencial de registo do Governo da Índia.", "fr": "Certificat d'enregistrement du gouvernement indien." },
    "Angola legal operation for engineering and infrastructure services.": { "pt": "Operação legal em Angola para serviços de engenharia e infraestrutura.", "fr": "Opération légale en Angola pour les services d'ingénierie et d'infrastructure." },
    "Angola tax identification for local operations.": { "pt": "Identificação fiscal de Angola para operações locais.", "fr": "Identification fiscale en Angola pour les opérations locales." },
    "Execution Flow": { "pt": "Fluxo de Execução", "fr": "Flux d'Exécution" },
    "Organized process from site visit to final delivery": { "pt": "Processo organizado, desde a visita ao local até à entrega final", "fr": "Processus organisé, de la visite du site à la livraison finale" },
    "We follow a clear field process to improve quality, safety and completion speed.": { "pt": "Seguimos um processo de campo claro para melhorar a qualidade, segurança e velocidade de conclusão.", "fr": "Nous suivons un processus clair sur le terrain pour améliorer la qualité, la sécurité et la vitesse d'achèvement." },
    "Site Visit": { "pt": "Visita ao Local", "fr": "Visite du Site" },
    "We inspect site condition, access, geology, water demand and project scope.": { "pt": "Inspecionamos a condição do local, acesso, geologia, demanda de água e escopo do projeto.", "fr": "Nous inspectons l'état du site, l'accès, la géologie, la demande en eau et l'étendue du projet." },
    "Planning": { "pt": "Planeamento", "fr": "Planification" },
    "We select drilling method, manpower, equipment, logistics and timeline.": { "pt": "Selecionamos o método de perfuração, mão de obra, equipamentos, logística e cronograma.", "fr": "Nous sélectionnons la méthode de forage, la main-d'œuvre, l'équipement, la logistique et le calendrier." },
    "Execution": { "pt": "Execução", "fr": "Exécution" },
    "Field work is carried out with supervision, safety checks and quality control.": { "pt": "O trabalho de campo é realizado com supervisão, verificações de segurança e controle de qualidade.", "fr": "Le travail sur le terrain est effectué avec supervision, contrôles de sécurité et contrôle qualité." },
    "Testing & Handover": { "pt": "Testes e Entrega", "fr": "Tests et Remise" },
    "We support final inspection, pump/tank setup and project handover.": { "pt": "Apoiamos a inspeção final, configuração da bomba/tanque e entrega do projeto.", "fr": "Nous soutenons l'inspection finale, la configuration de la pompe/du réservoir et la remise du projet." },
    "Project Portfolio": { "pt": "Portefólio de Projetos", "fr": "Portefeuille de Projets" },
    "Real project images from solar, drilling, geotechnical and water works": { "pt": "Imagens reais de projetos de obras solares, de perfuração, geotécnicas e hídricas", "fr": "Images de projets réels de travaux solaires, de forage, géotechniques et liés à l'eau" },
    "Selected photos are already arranged from your uploaded project images.": { "pt": "As fotos selecionadas já estão organizadas a partir das imagens do projeto carregadas.", "fr": "Les photos sélectionnées sont déjà organisées à partir des images de projet que vous avez téléchargées." },
    "Utility-Scale Solar Infrastructure": { "pt": "Infraestrutura Solar de Escala de Utilidade", "fr": "Infrastructure Solaire à Grande Échelle" },
    "Foundations, structures, modules, cable trays and inverter area support.": { "pt": "Fundações, estruturas, módulos, esteiras de cabos e suporte de área do inversor.", "fr": "Fondations, structures, modules, chemins de câbles et support de la zone de l'onduleur." },
    "Mud & DTH Drilling": { "pt": "Perfuração DTH e Lama", "fr": "Forage MFT et Boue" },
    "Deep borewell drilling for water projects.": { "pt": "Perfuração de poços profundos para projetos hídricos.", "fr": "Forage de puits profonds pour les projets d'eau." },
    "Pump & Tank Installation": { "pt": "Instalação de Bomba e Tanque", "fr": "Installation de Pompe et Réservoir" },
    "Complete borewell water system solutions.": { "pt": "Soluções completas de sistemas de água para poços.", "fr": "Solutions complètes de systèmes d'eau de puits." },
    "Soil Nailing & Anchoring": { "pt": "Pregagem e Ancoragem de Solo", "fr": "Clouage et Ancrage des Sols" },
    "Geotechnical stabilization and grouting works.": { "pt": "Estabilização geotécnica e obras de injeção.", "fr": "Travaux de stabilisation géotechnique et d'injection." },
    "Technical Workforce": { "pt": "Força de Trabalho Técnica", "fr": "Main-d'Œuvre Technique" },
    "Organized manpower, PPE and site supervision.": { "pt": "Mão de obra organizada, EPIs e supervisão do local.", "fr": "Main-d'œuvre organisée, EPI et supervision du site." },
    "Project Videos": { "pt": "Vídeos de Projetos", "fr": "Vidéos de Projets" },
    "Real site work increases client trust": { "pt": "O trabalho real no local aumenta a confiança do cliente", "fr": "Le travail réel sur site augmente la confiance des clients" },
    "Your uploaded project video has been placed here as ": { "pt": "O vídeo do seu projeto carregado foi colocado aqui como ", "fr": "Votre vidéo de projet téléchargée a été placée ici en tant que " },
    ". You can replace it anytime with a stronger drilling, anchoring or solar execution video.": { "pt": ". Pode substituí-lo a qualquer momento por um vídeo de execução de perfuração, ancoragem ou solar mais forte.", "fr": ". Vous pouvez la remplacer à tout moment par une vidéo d'exécution de forage, d'ancrage ou solaire plus convaincante." },
    "Get Project Support": { "pt": "Obter Suporte ao Projeto", "fr": "Obtenir de l'Assistance pour le Projet" },
    "Technical Capability": { "pt": "Capacidade Técnica", "fr": "Capacité Technique" },
    "Why choose MAAS / MNMAAS?": { "pt": "Porquê escolher a MAAS / MNMAAS?", "fr": "Pourquoi choisir MAAS / MNMAAS ?" },
    "We combine drilling, solar, water and geotechnical capability under one execution team.": { "pt": "Combinamos capacidade de perfuração, solar, hídrica e geotécnica sob uma única equipe de execução.", "fr": "Nous combinons les capacités de forage, solaires, hydrauliques et géotechniques sous une seule équipe d'exécution." },
    "Water & Borewell": { "pt": "Água e Poços", "fr": "Eau et Puits" },
    "Deep borewell up to 500m": { "pt": "Poços profundos de até 500m", "fr": "Puits profonds jusqu'à 500m" },
    "Submersible pumps": { "pt": "Bombas submersíveis", "fr": "Pompes submersibles" },
    "Water tanks and pipeline support": { "pt": "Tanques de água e suporte de tubulação", "fr": "Réservoirs d'eau et support de pipeline" },
    "Solar & Energy": { "pt": "Solar e Energia", "fr": "Solaire et Énergie" },
    "Solar foundation work": { "pt": "Trabalho de fundação solar", "fr": "Travaux de fondation solaire" },
    "MMS / tracker structure installation": { "pt": "Instalação de estrutura MMS / rastreador", "fr": "Installation de structure MMS / suiveur" },
    "Panel mounting support": { "pt": "Suporte de montagem de painel", "fr": "Support de montage de panneau" },
    "Execution partner for EPC companies": { "pt": "Parceiro de execução para empresas EPC", "fr": "Partenaire d'exécution pour les entreprises EPC" },
    "Geotech & Infrastructure": { "pt": "Geotecnia e Infraestrutura", "fr": "Géotechnique et Infrastructure" },
    "Soil nailing": { "pt": "Pregagem de solo", "fr": "Clouage du sol" },
    "Anchoring and grouting": { "pt": "Ancoragem e injeção", "fr": "Ancrage et injection" },
    "Foundation support": { "pt": "Suporte de fundação", "fr": "Soutien des fondations" },
    "Mining and civil infrastructure works": { "pt": "Obras de infraestrutura civil e de mineração", "fr": "Travaux d'infrastructure civile et minière" },
    "Need a reliable execution partner for ": { "pt": "Precisa de um parceiro de execução confiável para ", "fr": "Besoin d'un partenaire d'exécution fiable pour " },
    "water, solar, drilling or infrastructure?": { "pt": "água, solar, perfuração ou infraestrutura?", "fr": "l'eau, le solaire, le forage ou l'infrastructure ?" },
    "Contact MAAS GEO ENERGY / MNMAAS Angola for site visits, subcontract works, NGO projects, EPC support and technical proposals.": { "pt": "Contacte a MAAS GEO ENERGY / MNMAAS Angola para visitas ao local, trabalhos de subcontratação, projetos de ONGs, suporte EPC e propostas técnicas.", "fr": "Contactez MAAS GEO ENERGY / MNMAAS Angola pour des visites de sites, des travaux de sous-traitance, des projets d'ONG, le soutien EPC et des propositions techniques." },
    "Global brand for drilling, water, solar and geotechnical infrastructure works.": { "pt": "Marca global para obras de perfuração, hídricas, solares e de infraestrutura geotécnica.", "fr": "Marque mondiale pour les travaux de forage, d'eau, solaires et d'infrastructures géotechniques." },
    "Angola:": { "pt": "Angola:", "fr": "Angola:" },
    "MNMAAS Prestação de Serviços, (SU), LDA": { "pt": "MNMAAS Prestação de Serviços, (SU), LDA", "fr": "MNMAAS Prestação de Serviços, (SU), LDA" },
    "Services": { "en": "Services", "pt": "Serviços", "fr": "Services" },
    "Borewell drilling": { "pt": "Perfuração de poços", "fr": "Forage de puits" },
    "Pump and tank installation": { "pt": "Instalação de bomba e tanque", "fr": "Installation de pompe et réservoir" },
    "Soil nailing, anchoring and grouting": { "pt": "Pregagem de solo, ancoragem e injeção", "fr": "Clouage de sol, ancrage et injection" },
    "All rights reserved.": { "pt": "Todos os direitos reservados.", "fr": "Tous droits réservés." }
}

for i, (text, langs) in enumerate(trans_map.items()):
    key = f"key_{i}"
    translations["en"][key] = langs.get("en", text)
    translations["pt"][key] = langs.get("pt", text)
    translations["fr"][key] = langs.get("fr", text)
    
    # We will search the tree for this text and add data-i18n
    def search_and_replace(node):
        if hasattr(node, "children"):
            for child in list(node.children):
                if isinstance(child, str):
                    if text in child:
                        # Split and replace
                        new_html = child.replace(text, f'<span data-i18n="{key}">{text}</span>')
                        new_soup = BeautifulSoup(new_html, 'html.parser')
                        child.replace_with(*new_soup.contents)
                else:
                    search_and_replace(child)

    search_and_replace(soup)

# Special handling for text nodes in soup without modifying structure incorrectly
# To ensure robust replacement, we'll replace strings directly where possible.

for i, (text, langs) in enumerate(trans_map.items()):
    key = f"key_{i}"
    for text_node in soup.find_all(text=True):
        if text_node.parent and text_node.parent.name not in ['script', 'style']:
            if text in text_node:
                new_str = text_node.replace(text, f'<span data-i18n="{key}">{text}</span>')
                temp_soup = BeautifulSoup(new_str, 'html.parser')
                text_node.replace_with(*temp_soup.contents)


# Add CSS for language switcher
style_tag = soup.new_tag('style')
style_tag.string = '''
.lang-switch { display: flex; gap: 6px; align-items: center; background: rgba(6,23,45,.05); padding: 4px; border-radius: 20px; margin-left: 15px;}
.lang-switch button { border: none; background: transparent; padding: 6px 12px; border-radius: 16px; font-size: 13px; font-weight: 800; cursor: pointer; color: var(--navy); transition: 0.3s; }
.lang-switch button:hover { background: rgba(6,23,45,.1); }
.lang-switch button.active { background: var(--gold); color: #fff; box-shadow: 0 4px 10px rgba(201,154,50,.3); }
@media(max-width:980px) {
  .lang-switch { margin-top: 10px; margin-left: 0;}
  .brand { flex-wrap: wrap; }
}
'''
soup.head.append(style_tag)

# Add the language switcher UI
nav_wrap = soup.find('div', class_='navwrap')
if nav_wrap:
    switcher = BeautifulSoup('''
    <div class="lang-switch">
        <button onclick="setLang('en')" id="btn-en">EN</button>
        <button onclick="setLang('pt')" id="btn-pt" class="active">PT</button>
        <button onclick="setLang('fr')" id="btn-fr">FR</button>
    </div>
    ''', 'html.parser')
    # insert before the Request Quote button
    btn_gold = nav_wrap.find('a', class_='btn gold')
    if btn_gold:
        btn_gold.insert_before(switcher)
    else:
        nav_wrap.append(switcher)

# Inject JS dictionary and logic
script_tag = soup.new_tag('script')
script_tag.string = f'''
const translations = {json.dumps(translations, ensure_ascii=False)};
let currentLang = 'en'; // default to english or pt based on user preference

function setLang(lang) {{
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');

    // Translate elements
    document.querySelectorAll('[data-i18n]').forEach(el => {{
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {{
            el.innerHTML = translations[lang][key];
        }}
    }});
}}

// Initialize language based on default
document.addEventListener('DOMContentLoaded', () => {{
    setLang('en');
}});
'''
soup.body.append(script_tag)

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(str(soup))
