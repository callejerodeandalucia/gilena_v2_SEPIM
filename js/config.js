//******** configuración **********************//
url = "http://www.callejerodeandalucia.es/sepim/api";
urlGB = ""; //JGL - vacío si no tiene GB
idAplicacion = 145; //id de la aplicación
//*********************************************//
aplicacion = null;
pilaCategorias = [];
coor_x = null;
coor_y = null;
idEntidad = null;
datos = {
	limit: -1,
	offset:0
};
showDistance = false; //JGL - indica si mostrar la distancia o no en la búsqueda por categorías
gbRows = 150;
M.proxy(false);
attrNotShow = [ "the_geom", "geom", "_version_", "solrid", "keywords", "equipamiento"];
window.isApp 	= /^(?!HTTP)/.test(document.URL.toUpperCase());
window.isIOS 	= /iPad|iPhone|iPod/.test(navigator.userAgent);
sortCategories = false;
