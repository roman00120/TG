# 🌐 Guía de Acceso al Sitio Web Total Ground

Si estás leyendo esto, es porque quieres ver el sitio web de **Total Ground** que estamos desarrollando localmente.

### � Iniciar el Servidor (Estilo NPM)
Para que el enlace funcione, debes entrar a la carpeta **site** primero. Abre una terminal y corre:

```bash
cd site
npm run red
```

### 🔗 Enlace de Acceso
Una vez que el comando esté corriendo, tus compañeros pueden entrar aquí:

> **[http://192.168.15.34:8080](http://192.168.15.34:8080)**

---

### 📱 Instrucciones para Celulares
1. Asegúrate de estar conectado a la **misma red Wi-Fi** que la computadora anfitriona.
2. Abre el navegador de tu celular.
3. Escribe manualmente: `192.168.15.34:8080`

---

### 🛠️ ¿No puedes entrar? (Para el Administrador)
Si tus compañeros no pueden entrar, es casi seguro que el **Firewall de Windows** está bloqueando la conexión. Sigue estos pasos exactos:

1. Presiona la tecla **Windows** y escribe "Firewall".
2. Selecciona **"Windows Defender Firewall con seguridad avanzada"**.
3. Haz clic en **"Reglas de entrada"** (Inbound Rules) a la izquierda.
4. Haz clic en **"Nueva regla..."** (New Rule...) a la derecha.
5. Selecciona **"Puerto"** -> Siguiente.
6. Selecciona **TCP** y en "Puertos locales específicos" escribe: **8080**.
7. Selecciona **"Permitir la conexión"** -> Siguiente.
8. Asegúrate de que **Privado** y **Dominio** estén marcados.
9. Ponle un nombre como `Servidor Total Ground` y finaliza.

Una vez hecho esto, el enlace `http://192.168.15.34:8080` debería funcionar inmediatamente para cualquier persona en tu misma red.
