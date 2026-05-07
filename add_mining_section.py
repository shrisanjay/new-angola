import re
import json

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update CSS
old_css = "@media(max-width:980px){.links{display:none}.stats,.grid3,.split,.process,.cred,.cta,.foot,.video-grid{grid-template-columns:1fr}.gallery,.more-gallery{grid-template-columns:1fr;grid-auto-rows:280px}.item.big{grid-row:span 1}.head{display:block}.head p{margin-top:16px}.cta{padding:40px 24px;border-radius:28px}}"
new_css = "@media(max-width:980px){.links{display:none}.stats,.grid3,.split,.process,.cred,.cta,.foot,.video-grid,.video-grid-3{grid-template-columns:1fr}.gallery,.more-gallery{grid-template-columns:1fr;grid-auto-rows:280px}.item.big{grid-row:span 1}.head{display:block}.head p{margin-top:16px}.cta{padding:40px 24px;border-radius:28px}}\n    .mining{background:var(--navy);color:#fff}.mining .head h3,.mining .head p{color:#fff}.video-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:24px}.mining-box{position:relative;border-radius:24px;overflow:hidden;background:#000;box-shadow:var(--shadow)}.mining-box video{width:100%;aspect-ratio:16/9;object-fit:cover;display:block}.mining-caption{position:absolute;inset:auto 0 0;padding:24px;background:linear-gradient(0deg,rgba(6,23,45,.9),transparent);color:var(--gold2);font-weight:900;text-align:center;font-size:18px}"
html = html.replace(old_css, new_css)

# 2. Add Mining Section HTML
mining_html = """</section>
<section class="mining" id="mining"><div class="container"><div class="head center"><div><small><span data-i18n="key_109">Mining Operations</span></small><h3><span data-i18n="key_110">Heavy Duty Mining Support</span></h3></div><p><span data-i18n="key_111">Advanced execution for mining infrastructure, heavy drilling, and site operations.</span></p></div><div class="video-grid-3"><div class="mining-box"><video controls="" muted="" preload="metadata"><source src="videos/videoplayback.mp4" type="video/mp4"/>Your browser does not support video.</video><div class="mining-caption"><span data-i18n="key_112">Site Operation</span></div></div><div class="mining-box"><video controls="" muted="" preload="metadata"><source src="videos/videoplayback (1).mp4" type="video/mp4"/>Your browser does not support video.</video><div class="mining-caption"><span data-i18n="key_113">Heavy Drilling</span></div></div><div class="mining-box"><video controls="" muted="" preload="metadata"><source src="videos/videoplayback (2).mp4" type="video/mp4"/>Your browser does not support video.</video><div class="mining-caption"><span data-i18n="key_114">Infrastructure Support</span></div></div></div></div></section>"""

# Find the end of the video section and insert the mining section
html = html.replace('</section>\n<section id="capability">', mining_html + '\n<section id="capability">')

# 3. Update the JSON Translations
# Find the JSON object in the script tag
json_match = re.search(r'const translations = (\{.*?\});', html, re.DOTALL)
if json_match:
    json_str = json_match.group(1)
    translations = json.loads(json_str)
    
    # Add new keys
    en_new = {
        "key_109": "Mining Operations",
        "key_110": "Heavy Duty Mining Support",
        "key_111": "Advanced execution for mining infrastructure, heavy drilling, and site operations.",
        "key_112": "Site Operation",
        "key_113": "Heavy Drilling",
        "key_114": "Infrastructure Support"
    }
    pt_new = {
        "key_109": "Operações de Mineração",
        "key_110": "Suporte de Mineração Pesada",
        "key_111": "Execução avançada para infraestrutura de mineração, perfuração pesada e operações no local.",
        "key_112": "Operação no Local",
        "key_113": "Perfuração Pesada",
        "key_114": "Apoio à Infraestrutura"
    }
    fr_new = {
        "key_109": "Opérations Minières",
        "key_110": "Soutien Minier Lourd",
        "key_111": "Exécution avancée pour l'infrastructure minière, les forages lourds et les opérations sur site.",
        "key_112": "Opération sur Site",
        "key_113": "Forage Lourd",
        "key_114": "Soutien à l'Infrastructure"
    }
    
    translations["en"].update(en_new)
    translations["pt"].update(pt_new)
    translations["fr"].update(fr_new)
    
    # Dump it back
    new_json_str = json.dumps(translations, ensure_ascii=False)
    html = html.replace(json_match.group(0), f'const translations = {new_json_str};')

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
