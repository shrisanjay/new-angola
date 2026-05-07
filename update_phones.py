import json
import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the setLang function
old_setLang = """    // Translate elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}"""

new_setLang = """    // Translate elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    // Translate hrefs
    document.querySelectorAll('[data-i18n-href]').forEach(el => {
        const key = el.getAttribute('data-i18n-href');
        if (translations[lang] && translations[lang][key]) {
            el.href = translations[lang][key];
        }
    });
}"""

content = content.replace(old_setLang, new_setLang)

# 2. Extract translations
match = re.search(r'const translations = ({.*?});\nlet currentLang', content, re.DOTALL)
translations_json_str = match.group(1)
translations = json.loads(translations_json_str)

# Add phone keys
translations['en'].update({
    "phone1_text": "+91 9363526497",
    "phone1_href": "https://wa.me/919363526497",
    "phone2_text": "+91 7010690639",
    "phone2_href": "tel:+917010690639"
})
translations['fr'].update({
    "phone1_text": "+91 9363526497",
    "phone1_href": "https://wa.me/919363526497",
    "phone2_text": "+91 7010690639",
    "phone2_href": "tel:+917010690639"
})
translations['pt'].update({
    "phone1_text": "+244 940 016 234",
    "phone1_href": "https://wa.me/244940016234",
    "phone2_text": "+244 940 016 203",
    "phone2_href": "tel:+244940016203"
})

new_translations_json_str = json.dumps(translations, ensure_ascii=False)
content = content.replace(translations_json_str, new_translations_json_str)

# 3. Replace HTML links
# Line 33: WA button
content = content.replace(
    '<a aria-label="WhatsApp" class="wa" href="https://wa.me/244940016234" target="_blank">☏</a>',
    '<a aria-label="WhatsApp" class="wa" href="https://wa.me/244940016234" data-i18n-href="phone1_href" target="_blank">☏</a>'
)

# Line 34: Header
content = content.replace(
    '<a href="https://wa.me/244940016234" target="_blank" style="text-decoration:none; color:inherit;">+244 940 016 234</a>',
    '<a href="https://wa.me/244940016234" data-i18n-href="phone1_href" target="_blank" style="text-decoration:none; color:inherit;"><span data-i18n="phone1_text">+244 940 016 234</span></a>'
)

# Line 43: Hero btn
content = content.replace(
    '<a class="btn gold" href="https://wa.me/244940016234" target="_blank"><span data-i18n="key_11">',
    '<a class="btn gold" href="https://wa.me/244940016234" data-i18n-href="phone1_href" target="_blank"><span data-i18n="key_11">'
)

# Line 52: Contact box
content = content.replace(
    '<a href="https://wa.me/244940016234" target="_blank">📞 +244 940 016 234</a>',
    '<a href="https://wa.me/244940016234" data-i18n-href="phone1_href" target="_blank">📞 <span data-i18n="phone1_text">+244 940 016 234</span></a>'
)
content = content.replace(
    '<a href="tel:+244940016203">📞 +244 940 016 203</a>',
    '<a href="tel:+244940016203" data-i18n-href="phone2_href">📞 <span data-i18n="phone2_text">+244 940 016 203</span></a>'
)

# Line 54: Footer
content = content.replace(
    '<a href="https://wa.me/244940016234" target="_blank">+244 940 016 234</a>',
    '<a href="https://wa.me/244940016234" data-i18n-href="phone1_href" target="_blank"><span data-i18n="phone1_text">+244 940 016 234</span></a>'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Phones translated successfully.")
