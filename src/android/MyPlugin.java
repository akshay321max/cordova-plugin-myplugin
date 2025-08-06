package com.example.myplugin;

import org.apache.cordova.*;
import org.json.JSONArray;

public class MyPlugin extends CordovaPlugin {
  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
    if (action.equals("greet")) {
      String name = args.optString(0, "Guest");
      callbackContext.success("Hello, " + name + "!");
      return true;
    }
    return false;
  }
}
