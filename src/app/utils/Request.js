import $ from 'jquery'

class Request {
    ajaxRequest(url, method, data, successCallback, failureCallback) {
        $.ajax({
            url: url,
            method: method,
            data: data,
            dataType: "json",
            success: successCallback,
            error: failureCallback
        });
    }

    get(url, data, successCallback, failureCallback) {
        this.ajaxRequest(url, 'get', data, successCallback, failureCallback);
    }

    post(url, data, successCallback, failureCallback) {
        this.ajaxRequest(url, 'post', data, successCallback, failureCallback);
    }
}

export default Request;