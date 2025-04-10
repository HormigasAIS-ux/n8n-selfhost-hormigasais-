# Política de Seguridad - HormigasAIS Selfhost

Este repositorio contiene zonas críticas designadas en el archivo `package.json` bajo los campos `protectedZonez` y `protectedZonezmeta`.

## Acceso restringido
Los siguientes archivos y directorios no deben ser modificados sin revisión previa del administrador:
- `.github/workflows/`
- `check-user.js`
- `github.com/`

## Revisión automatizada
El repositorio utiliza Git hooks (Husky) y validaciones en GitHub Actions para proteger la integridad del código. Cualquier intento no autorizado será bloqueado.

## Reportar vulnerabilidades
Si encuentras alguna vulnerabilidad o comportamiento inesperado, por favor contacta a: **cristhiam.quinonez@hormigasais.org**
