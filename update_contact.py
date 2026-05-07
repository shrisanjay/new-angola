import json
import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add CSS classes
if '.lang-en .hide-en' not in content:
    content = content.replace('</style></head>', '.lang-en .hide-en, .lang-fr .hide-fr, .lang-pt .hide-pt { display: none !important; }\n</style></head>')

# 2. Update setLang
if 'document.body.className' not in content:
    content = content.replace('document.documentElement.lang = lang;', 'document.documentElement.lang = lang;\n    document.body.className = "lang-" + lang;')

# 3. Add to translations
match = re.search(r'const translations = ({.*?});\nlet currentLang', content, re.DOTALL)
if match:
    translations_json_str = match.group(1)
    translations = json.loads(translations_json_str)

    translations['en']['address_text'] = "📍 Kudi Theru, 2/20, Samutharapalayam, Kumaramangalam, Tiruchengode, Namakkal, Tamil Nadu, 637205"
    translations['pt']['address_text'] = "📍 Rua Padre Manuel Ruela Pombo, Nº 40, Bairro Prenda, Maianga, Luanda – Angola"
    translations['fr']['address_text'] = ""

    new_translations_json_str = json.dumps(translations, ensure_ascii=False)
    content = content.replace(translations_json_str, new_translations_json_str)

# 4. Update the HTML
# Address
content = content.replace(
    '<div>📍 Rua Padre Manuel Ruela Pombo, Nº 40, Bairro Prenda, Maianga, Luanda – Angola</div>',
    '<div class="hide-fr"><span data-i18n="address_text">📍 Rua Padre Manuel Ruela Pombo, Nº 40, Bairro Prenda, Maianga, Luanda – Angola</span></div>'
)

# NIF
content = content.replace(
    '<div>🧾 MNMAAS NIF: 5002785684</div>',
    '<div class="hide-en hide-fr">🧾 MNMAAS NIF: 5002785684</div>'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Contact updated successfully.")
