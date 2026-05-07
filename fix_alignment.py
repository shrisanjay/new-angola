import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Fix nested span for Execution Flow
html = html.replace(
    '<small><span data-i18n="key_52"><span data-i18n="key_59"><span data-i18n="key_59">Execution</span></span> Flow</span></small>',
    '<small><span data-i18n="key_52">Execution Flow</span></small>'
)

# Fix nested span for Real project images
html = html.replace(
    '<h3><span data-i18n="key_64"><span data-i18n="key_64">Real project images from solar, drilling, geotechnical and water works</span></span></h3>',
    '<h3><span data-i18n="key_64">Real project images from solar, drilling, geotechnical and water works</span></h3>'
)

# Fix nested span for Project Portfolio
html = html.replace(
    '<small><span data-i18n="key_63"><span data-i18n="key_63">Project Portfolio</span></span></small>',
    '<small><span data-i18n="key_63">Project Portfolio</span></small>'
)

# Add alignment css to .step
# .step,.cap{background:#fff;border:1px solid rgba(6,23,45,.08);border-radius:24px;padding:28px;box-shadow:0 16px 42px rgba(6,23,45,.08)}
# Add text-align: center; display: flex; flex-direction: column; align-items: center; to .step
html = html.replace(
    '.step,.cap{background:#fff;border:1px solid rgba(6,23,45,.08);border-radius:24px;padding:28px;box-shadow:0 16px 42px rgba(6,23,45,.08)}',
    '.step,.cap{background:#fff;border:1px solid rgba(6,23,45,.08);border-radius:24px;padding:28px;box-shadow:0 16px 42px rgba(6,23,45,.08)}.step{text-align:center;display:flex;flex-direction:column;align-items:center}'
)

# Add center alignment class to CSS
# .head{display:flex;justify-content:space-between;align-items:end;gap:28px;margin-bottom:46px}
html = html.replace(
    '.head{display:flex;justify-content:space-between;align-items:end;gap:28px;margin-bottom:46px}',
    '.head{display:flex;justify-content:space-between;align-items:end;gap:28px;margin-bottom:46px}.head.center{flex-direction:column;align-items:center;text-align:center;justify-content:center}.head.center p{margin-top:16px}'
)

# Apply .center to Execution Flow head
html = html.replace(
    '<div class="head"><div><small><span data-i18n="key_52">Execution Flow</span></small>',
    '<div class="head center"><div><small><span data-i18n="key_52">Execution Flow</span></small>'
)

# Apply .center to Project Portfolio head
html = html.replace(
    '<div class="head"><div><small><span data-i18n="key_63">Project Portfolio</span></small>',
    '<div class="head center"><div><small><span data-i18n="key_63">Project Portfolio</span></small>'
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
