$(document).ready(function () {
  var oMain = new CMain({
    starting_num_cards: 7,
    audio_enable_on_startup: true, //ENABLE/DISABLE AUDIO WHEN GAME STARTS
    fullscreen: false, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
    check_orientation: true, //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
  });

  $(oMain).on("select_players", function (evt, iNumPlayers) {
    //...ADD YOUR CODE HERE EVENTUALLY
  });

  $(oMain).on("start_session", function (evt) {
    if (getParamValue("ctl-arcade") === "true") {
      parent.__ctlArcadeStartSession();
    }
    //...ADD YOUR CODE HERE EVENTUALLY
  });

  $(oMain).on("end_session", function (evt) {
    if (getParamValue("ctl-arcade") === "true") {
      parent.__ctlArcadeEndSession();
    }
    //...ADD YOUR CODE HERE EVENTUALLY
  });

  $(oMain).on("save_score", function (evt, iScore, szMode) {
    if (getParamValue("ctl-arcade") === "true") {
      parent.__ctlArcadeSaveScore({ score: iScore, mode: szMode });
    }
    //...ADD YOUR CODE HERE EVENTUALLY
  });

  $(oMain).on("show_interlevel_ad", function (evt) {
    if (getParamValue("ctl-arcade") === "true") {
      parent.__ctlArcadeShowInterlevelAD();
    }
    //...ADD YOUR CODE HERE EVENTUALLY
  });

  $(oMain).on("share_event", function (evt, iScore) {
    if (getParamValue("ctl-arcade") === "true") {
      parent.__ctlArcadeShareEvent({
        img: TEXT_SHARE_IMAGE,
        title: TEXT_SHARE_TITLE,
        msg: TEXT_SHARE_MSG1 + iScore + TEXT_SHARE_MSG2,
        msg_share: TEXT_SHARE_SHARE1 + iScore + TEXT_SHARE_SHARE1,
      });
    }
    //...ADD YOUR CODE HERE EVENTUALLY
  });

  if (isIOS()) {
    setTimeout(function () {
      sizeHandler();
    }, 200);
  } else {
    sizeHandler();
  }
});

function on_ctl_multiplayer_send_nickname() {
  var szNickname = jQuery("input[name=nickname]").val();

  g_oCTLMultiplayer.setNickName(szNickname);

  s_oNetworkManager.login(szNickname);
}

function on_ctl_multiplayer_send_password() {
  var oNodePassword = jQuery(
    "#" + g_oCTLMultiplayer._idCurDialog + " input[name=password]"
  );

  var szRoomName = oNodePassword.attr("data-room-name");
  var szPassword = oNodePassword.val();

  s_oNetworkManager.tryJoinRoomWithPass(szRoomName, szPassword);
}

function on_ctl_multiplayer_join_room_with_password() {
  g_oCTLMultiplayer.closeAllDialog();
  g_oCTLMultiplayer.showLoading(TEXT_NETWORK_CONNECTING);
}

function on_ctl_multiplayer_show_create_match() {
  g_oCTLMultiplayer.closeAllDialog();
  g_oCTLMultiplayer.showCreateRoom();
}

function on_ctl_multiplayer_join_quick_match() {
  g_oCTLMultiplayer.closeAllDialog();

  s_oNetworkManager.joinQuickMatch();
}

function on_ctl_multiplayer_close_type_room_password() {
  g_oCTLMultiplayer.closeAllDialog();
  s_oNetworkManager.gotoLobby();
}

function on_ctl_multiplayer_close_create_room() {
  g_oCTLMultiplayer.closeAllDialog();
  s_oNetworkManager.gotoLobby();
}

function on_ctl_multiplayer_refresh_room_list() {
  s_oNetworkManager.gotoLobby();
}

function on_ctl_multiplayer_create_room() {
  var szRoomname = jQuery("input[name=roomname]").val();
  var szPassword = jQuery("input[name=password]").val();
  var iMaxPlayers = jQuery("input[name='maxplayers']:checked").val();

  s_oNetworkManager.tryCreateUniqueRoom(szRoomname, szPassword, iMaxPlayers);
}

function on_ctl_multiplayer_join_room(szRoomName) {
  s_oNetworkManager.joinRoom(szRoomName);
}

function on_ctl_user_search(szTerm) {
  s_oNetworkManager.filterRoomsShown(szTerm);
}
