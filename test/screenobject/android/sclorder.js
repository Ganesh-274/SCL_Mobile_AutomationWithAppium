class sclorder{
    get loginasadmin(){
        return $('~LogIn as admin');
    }
    get username(){
        return $$('android.widget.EditText')[0];
    }
    get password(){
        return $$('android.widget.EditText')[1];
    }
    get clickloginbtn(){
        return $('~Log In');
    }
    get menubarclick(){
        return $('android.widget.Button');
    }
    get selectordermenu(){
        return $('//android.view.View[@content-desc="Orders"]');
    }
    get creatordericon(){
        return $('//android.widget.ImageView[@content-desc="cartBtn"]');
    }
    get searchicon(){
        return $('android.widget.EditText');
    }
    get selectdealer(){
        return $('//android.view.View[@content-desc="ABM TRADERS | 11008926"]');
    }
    get createorderbtn(){
        return $('//android.widget.ImageView[@content-desc="createOrderBtn"]');
    }
    get selectoption(){
        return $('//android.widget.EditText');
    }
    get selectdealerfrom(){
        return $('//android.view.View[@content-desc="Total Order Quantity (MT)"]');
    }
    get selecdistricet(){
        return $('//android.widget.Button[@content-desc="District"]');
    }
    get selecdistrictdropdown(){
        return $('//android.view.View[@content-desc="BHIWANI"]');
    }
    get clicksku(){
        return $('//android.widget.Button[@content-desc="Select SKU"]');
    }
    get selectskuvalue(){
        return $('//android.view.View[@content-desc="BANGUR CEMENT_PPC_HDPE"]');
    }
    get clickmtinput(){
        return $('//android.widget.ScrollView/android.widget.EditText');
    }
    get screenclick(){
        return $('//android.view.View[@content-desc="SKU Information"]');
    }
    get selctetreason(){
        return $('//android.widget.ScrollView/android.widget.EditText');
    }
    get clickreason(){
        return $('//android.widget.Button[@content-desc="Confirm"]');
    }
    get placeorderbtnclick(){
        return $('//android.widget.Button[@content-desc="Place Order"]');
    }
    get confirmbtn(){
        return $('//android.widget.ImageView[@content-desc="Order has been Recieved"]');
    }
}
module.exports = new sclorder();