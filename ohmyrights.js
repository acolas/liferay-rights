// install jquerify
// https://chrome.google.com/webstore/detail/jquerify/gbmifchmngifmadobkcpijhhldeeelkc

var perm = function(item) {


	var data = {
		 
		"_86_formDate":"1375175019972",       
		"_86_cmd": "role_permissions",    
		"_86_resourceId":"0",          
		"58205_ACTION_UPDATE": "on",
		"58001_ACTION_UPDATE": "on",
		"rolesSearchContainerPrimaryKeys":"58205,58001"
	  
	};	

	$.ajax({
	  type: "POST",
	  url: "http://XXXXXXXXXXX/group/control_panel/manage?p_p_id=86&p_p_lifecycle=1&p_p_state=maximized&p_p_mode=view&doAsGroupId=10192&refererPlid=12406&_86_struts_action=%2Fportlet_configuration%2Fedit_permissions&_86_tabs2=regular-roles&_86_redirect=http%3A%2F%2Fprod.meteo-backoffice-portails.aw.atos.net%2Fgroup%2Fcontrol_panel%2Fmanage%3Fp_p_id%3D20%26p_p_lifecycle%3D0%26p_p_state%3Dmaximized%26p_p_mode%3Dview%26doAsGroupId%3D10192%26refererPlid%3D12406%26_20_entryEnd%3D75%26_20_displayStyle%3Dicon%26_20_viewEntries%3D0%26_20_viewEntriesPage%3D1%26_20_viewFolders%3D0%26_20_refererPlid%3D12406%26_20_folderStart%3D0%26_20_doAsGroupId%3D10192%26_20_struts_action%3D%252Fdocument_library%252Fview%26_20_folderEnd%3D20%26_20_entryStart%3D0%26_20_folderId%3D18008&_86_returnToFullPageURL=&_86_portletResource=20&_86_modelResource=com.liferay.portlet.documentlibrary.model.DLFileEntry&_86_modelResourceDescription="+item.title+"&_86_resourceGroupId=10192&_86_resourcePrimKey="+item.id+"&_86_roleTypes=",
	  data: data,
	  success: function(data){console.log("done for "+item.title);}
	});



}

var tmp = $(".document-display-style").map(function(){ var id = $(this).find('input').attr('value'); var title = $(this).attr('data-title'); return {id:id,title:title}; });
var files = $.makeArray(tmp);


files.forEach(function(item){perm(item)});
