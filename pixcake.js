var url = $request.url;
var crack = JSON.parse($response.body);
if (url.indexOf('/api/app/user/info') > 0) {
    crack = {"code":0,"data":{"complete_info_dialog":false,"org_backend_info":{"access_url":"https://business.pixcakeai.com","is_show":false},"org_info":{"info_state":2,"tag":0,"usage_mode":1},"patch":0,"show_complete_info":false,"show_product_orders":true,"user_info":{"id":1,"is_new":0,"is_vip":1,"name":"","org_id":1,"phone":"13888888888","phone_cc":86,"role_id":1,"state":1,"type":1,"uuid":"d2253194-38c5-11ed-a261-0242ac120002"},"vip_info":[{"end_time":"2099-09-13T09:26:27+08:00","left_count":999,"pre_left_count":999,"start_time":"2022-09-13T09:26:27+08:00","total_count":999}],"watermark":0}};
} else if (url.indexOf('/api/project/export/post') > 0) {
    crack = {"code":0,"data":{}};
}
$done({body: JSON.stringify(crack)});
