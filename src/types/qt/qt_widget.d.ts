declare class QWidget extends QPaintDevice {
    //#region Enums
    // Qt::FocusPolicy
    static NoFocus: number; // 0
    static TabFocus: number; // 1
    static ClickFocus: number; // 2
    static StrongFocus: number; // 11
    static WheelFocus: number; // 15

    static Key_Escape: number; // 16777216
    static Key_Tab: number; // 16777217
    static Key_Backtab: number; // 16777218
    static Key_Backspace: number; // 16777219
    static Key_Return: number; // 16777220
    static Key_Enter: number; // 16777221
    static Key_Insert: number; // 16777222
    static Key_Delete: number; // 16777223
    static Key_Pause: number; // 16777224
    static Key_Print: number; // 16777225
    static Key_SysReq: number; // 16777226
    static Key_Clear: number; // 16777227
    static Key_Home: number; // 16777232
    static Key_End: number; // 16777233
    static Key_Left: number; // 16777234
    static Key_Up: number; // 16777235
    static Key_Right: number; // 16777236
    static Key_Down: number; // 16777237
    static Key_PageUp: number; // 16777238
    static Key_PageDown: number; // 16777239
    static Key_Shift: number; // 16777248
    static Key_Control: number; // 16777249
    static Key_Meta: number; // 16777250
    static Key_Alt: number; // 16777251
    static Key_CapsLock: number; // 16777252
    static Key_NumLock: number; // 16777253
    static Key_ScrollLock: number; // 16777254
    static Key_F1: number; // 16777264
    static Key_F2: number; // 16777265
    static Key_F3: number; // 16777266
    static Key_F4: number; // 16777267
    static Key_F5: number; // 16777268
    static Key_F6: number; // 16777269
    static Key_F7: number; // 16777270
    static Key_F8: number; // 16777271
    static Key_F9: number; // 16777272
    static Key_F10: number; // 16777273
    static Key_F11: number; // 16777274
    static Key_F12: number; // 16777275
    static Key_F13: number; // 16777276
    static Key_F14: number; // 16777277
    static Key_F15: number; // 16777278
    static Key_F16: number; // 16777279
    static Key_F17: number; // 16777280
    static Key_F18: number; // 16777281
    static Key_F19: number; // 16777282
    static Key_F20: number; // 16777283
    static Key_F21: number; // 16777284
    static Key_F22: number; // 16777285
    static Key_F23: number; // 16777286
    static Key_F24: number; // 16777287
    static Key_F25: number; // 16777288
    static Key_F26: number; // 16777289
    static Key_F27: number; // 16777290
    static Key_F28: number; // 16777291
    static Key_F29: number; // 16777292
    static Key_F30: number; // 16777293
    static Key_F31: number; // 16777294
    static Key_F32: number; // 16777295
    static Key_F33: number; // 16777296
    static Key_F34: number; // 16777297
    static Key_F35: number; // 16777298
    static Key_Super_L: number; // 16777299
    static Key_Super_R: number; // 16777300
    static Key_Menu: number; // 16777301
    static Key_Hyper_L: number; // 16777302
    static Key_Hyper_R: number; // 16777303
    static Key_Help: number; // 16777304
    static Key_Direction_L: number; // 16777305
    static Key_Direction_R: number; // 16777312
    static Key_Space: number; // 32
    static Key_Any: number; // 32
    static Key_Exclam: number; // 33
    static Key_QuoteDbl: number; // 34
    static Key_numberSign: number; // 35
    static Key_Dollar: number; // 36
    static Key_Percent: number; // 37
    static Key_Ampersand: number; // 38
    static Key_Apostrophe: number; // 39
    static Key_ParenLeft: number; // 40
    static Key_ParenRight: number; // 41
    static Key_Asterisk: number; // 42
    static Key_Plus: number; // 43
    static Key_Comma: number; // 44
    static Key_Minus: number; // 45
    static Key_Period: number; // 46
    static Key_Slash: number; // 47
    static Key_0: number; // 48
    static Key_1: number; // 49
    static Key_2: number; // 50
    static Key_3: number; // 51
    static Key_4: number; // 52
    static Key_5: number; // 53
    static Key_6: number; // 54
    static Key_7: number; // 55
    static Key_8: number; // 56
    static Key_9: number; // 57
    static Key_Colon: number; // 58
    static Key_Semicolon: number; // 59
    static Key_Less: number; // 60
    static Key_Equal: number; // 61
    static Key_Greater: number; // 62
    static Key_Question: number; // 63
    static Key_At: number; // 64
    static Key_A: number; // 65
    static Key_B: number; // 66
    static Key_C: number; // 67
    static Key_D: number; // 68
    static Key_E: number; // 69
    static Key_F: number; // 70
    static Key_G: number; // 71
    static Key_H: number; // 72
    static Key_I: number; // 73
    static Key_J: number; // 74
    static Key_K: number; // 75
    static Key_L: number; // 76
    static Key_M: number; // 77
    static Key_N: number; // 78
    static Key_O: number; // 79
    static Key_P: number; // 80
    static Key_Q: number; // 81
    static Key_R: number; // 82
    static Key_S: number; // 83
    static Key_T: number; // 84
    static Key_U: number; // 85
    static Key_V: number; // 86
    static Key_W: number; // 877
    static Key_X: number; // 88
    static Key_Y: number; // 89
    static Key_Z: number; // 90
    static Key_BracketLeft: number; // 91
    static Key_Backslash: number; // 92
    static Key_BracketRight: number; // 93
    static Key_AsciiCircum: number; // 94
    static Key_Underscore: number; // 95
    static Key_QuoteLeft: number; // 96
    static Key_BraceLeft: number; // 123
    static Key_Bar: number; // 124
    static Key_BraceRight: number; // 125
    static Key_AsciiTilde: number; // 126
    static Key_nobreakspace: number; // 160
    static Key_exclamdown: number; // 161
    static Key_cent: number; // 162
    static Key_sterling: number; // 163
    static Key_currency: number; // 164
    static Key_yen: number; // 165
    static Key_brokenbar: number; // 166
    static Key_section: number; // 167
    static Key_diaeresis: number; // 168
    static Key_copyright: number; // 169
    static Key_ordfeminine: number; // 170
    static Key_guillemotleft: number; // 171
    static Key_notsign: number; // 172
    static Key_hyphen: number; // 173
    static Key_registered: number; // 174
    static Key_macron: number; // 175
    static Key_degree: number; // 176
    static Key_plusminus: number; // 177
    static Key_twosuperior: number; // 178
    static Key_threesuperior: number; // 179
    static Key_acute: number; // 180
    static Key_mu: number; // 181
    static Key_paragraph: number; // 182
    static Key_periodcentered: number; // 183
    static Key_cedilla: number; // 184
    static Key_onesuperior: number; // 185
    static Key_masculine: number; // 186
    static Key_guillemotright: number; // 187
    static Key_onequarter: number; // 188
    static Key_onehalf: number; // 189
    static Key_threequarters: number; // 190
    static Key_questiondown: number; // 191
    static Key_Agrave: number; // 192
    static Key_Aacute: number; // 193
    static Key_Acircumflex: number; // 194
    static Key_Atilde: number; // 195
    static Key_Adiaeresis: number; // 196
    static Key_Aring: number; // 197
    static Key_AE: number; // 198
    static Key_Ccedilla: number; // 199
    static Key_Egrave: number; // 200
    static Key_Eacute: number; // 201
    static Key_Ecircumflex: number; // 202
    static Key_Ediaeresis: number; // 203
    static Key_Igrave: number; // 204
    static Key_Iacute: number; // 205
    static Key_Icircumflex: number; // 206
    static Key_Idiaeresis: number; // 207
    static Key_ETH: number; // 208
    static Key_Ntilde: number; // 209
    static Key_Ograve: number; // 210
    static Key_Oacute: number; // 211
    static Key_Ocircumflex: number; // 212
    static Key_Otilde: number; // 213
    static Key_Odiaeresis: number; // 214
    static Key_multiply: number; // 215
    static Key_Ooblique: number; // 216
    static Key_Ugrave: number; // 217
    static Key_Uacute: number; // 218
    static Key_Ucircumflex: number; // 219
    static Key_Udiaeresis: number; // 220
    static Key_Yacute: number; // 221
    static Key_THORN: number; // 222
    static Key_ssharp: number; // 223
    static Key_division: number; // 247
    static Key_ydiaeresis: number; // 255
    static Key_AltGr: number; // 16781571
    static Key_Multi_key: number; // 16781600
    static Key_Codeinput: number; // 16781623
    static Key_SingleCandidate: number; // 16781628
    static Key_MultipleCandidate: number; // 16781629
    static Key_PreviousCandidate: number; // 16781630
    static Key_Mode_switch: number; // 16781694
    static Key_Kanji: number; // 16781601
    static Key_Muhenkan: number; // 16781602
    static Key_Henkan: number; // 16781603
    static Key_Romaji: number; // 16781604
    static Key_Hiragana: number; // 16781605
    static Key_Katakana: number; // 16781606
    static Key_Hiragana_Katakana: number; // 16781607
    static Key_Zenkaku: number; // 16781608
    static Key_Hankaku: number; // 16781609
    static Key_Zenkaku_Hankaku: number; // 16781610
    static Key_Touroku: number; // 16781611
    static Key_Massyo: number; // 16781612
    static Key_Kana_Lock: number; // 16781613
    static Key_Kana_Shift: number; // 16781614
    static Key_Eisu_Shift: number; // 16781615
    static Key_Eisu_toggle: number; // 16781616
    static Key_Hangul: number; // 16781617
    static Key_Hangul_Start: number; // 16781618
    static Key_Hangul_End: number; // 16781619
    static Key_Hangul_Hanja: number; // 16781620
    static Key_Hangul_Jamo: number; // 16781621
    static Key_Hangul_Romaja: number; // 16781622
    static Key_Hangul_Jeonja: number; // 16781624
    static Key_Hangul_Banja: number; // 16781625
    static Key_Hangul_PreHanja: number; // 16781626
    static Key_Hangul_PostHanja: number; // 16781627
    static Key_Hangul_Special: number; // 16781631
    static Key_Dead_Grave: number; // 16781904
    static Key_Dead_Acute: number; // 16781905
    static Key_Dead_Circumflex: number; // 16781906
    static Key_Dead_Tilde: number; // 16781907
    static Key_Dead_Macron: number; // 16781908
    static Key_Dead_Breve: number; // 16781909
    static Key_Dead_Abovedot: number; // 16781910
    static Key_Dead_Diaeresis: number; // 16781911
    static Key_Dead_Abovering: number; // 16781912
    static Key_Dead_Doubleacute: number; // 16781913
    static Key_Dead_Caron: number; // 16781914
    static Key_Dead_Cedilla: number; // 16781915
    static Key_Dead_Ogonek: number; // 16781916
    static Key_Dead_Iota: number; // 16781917
    static Key_Dead_Voiced_Sound: number; // 16781918
    static Key_Dead_Semivoiced_Sound: number; // 16781919
    static Key_Dead_Belowdot: number; // 16781920
    static Key_Dead_Hook: number; // 16781921
    static Key_Dead_Horn: number; // 16781922
    static Key_Back: number; // 16777313
    static Key_Forward: number; // 16777314
    static Key_Stop: number; // 16777315
    static Key_Refresh: number; // 16777316
    static Key_VolumeDown: number; // 16777328
    static Key_VolumeMute: number; // 16777329
    static Key_VolumeUp: number; // 16777330
    static Key_BassBoost: number; // 16777331
    static Key_BassUp: number; // 16777332
    static Key_BassDown: number; // 16777333
    static Key_TrebleUp: number; // 16777334
    static Key_TrebleDown: number; // 16777335
    static Key_MediaPlay: number; // 16777344
    static Key_MediaStop: number; // 16777345
    static Key_MediaPrevious: number; // 16777346
    static Key_MediaNext: number; // 16777347
    static Key_MediaRecord: number; // 16777348
    static Key_MediaPause: number; // 16777349
    static Key_MediaTogglePlayPause: number; // 16777350
    static Key_HomePage: number; // 16777360
    static Key_Favorites: number; // 16777361
    static Key_Search: number; // 16777362
    static Key_Standby: number; // 16777363
    static Key_OpenUrl: number; // 16777364
    static Key_LaunchMail: number; // 16777376
    static Key_LaunchMedia: number; // 16777377
    static Key_Launch0: number; // 16777378
    static Key_Launch1: number; // 16777379
    static Key_Launch2: number; // 16777380
    static Key_Launch3: number; // 16777381
    static Key_Launch4: number; // 16777382
    static Key_Launch5: number; // 16777383
    static Key_Launch6: number; // 16777384
    static Key_Launch7: number; // 16777385
    static Key_Launch8: number; // 16777386
    static Key_Launch9: number; // 16777387
    static Key_LaunchA: number; // 16777388
    static Key_LaunchB: number; // 16777389
    static Key_LaunchC: number; // 16777390
    static Key_LaunchD: number; // 16777391
    static Key_LaunchE: number; // 16777392
    static Key_LaunchF: number; // 16777393
    static Key_MonBrightnessUp: number; // 16777394
    static Key_MonBrightnessDown: number; // 16777395
    static Key_KeyboardLightOnOff: number; // 16777396
    static Key_KeyboardBrightnessUp: number; // 16777397
    static Key_KeyboardBrightnessDown: number; // 16777398
    static Key_PowerOff: number; // 16777399
    static Key_WakeUp: number; // 16777400
    static Key_Eject: number; // 16777401
    static Key_ScreenSaver: number; // 16777402
    static Key_WWW: number; // 16777403
    static Key_Memo: number; // 16777404
    static Key_LightBulb: number; // 16777405
    static Key_Shop: number; // 16777406
    static Key_History: number; // 16777407
    static Key_AddFavorite: number; // 16777408
    static Key_HotLinks: number; // 16777409
    static Key_BrightnessAdjust: number; // 16777410
    static Key_Finance: number; // 16777411
    static Key_Community: number; // 16777412
    static Key_AudioRewind: number; // 16777413
    static Key_BackForward: number; // 16777414
    static Key_ApplicationLeft: number; // 16777415
    static Key_ApplicationRight: number; // 16777416
    static Key_Book: number; // 16777417
    static Key_CD: number; // 16777418
    static Key_Calculator: number; // 16777419
    static Key_ToDoList: number; // 16777420
    static Key_ClearGrab: number; // 16777421
    static Key_Close: number; // 16777422
    static Key_Copy: number; // 16777423
    static Key_Cut: number; // 16777424
    static Key_Display: number; // 16777425
    static Key_DOS: number; // 16777426
    static Key_Documents: number; // 16777427
    static Key_Excel: number; // 16777428
    static Key_Explorer: number; // 16777429
    static Key_Game: number; // 16777430
    static Key_Go: number; // 16777431
    static Key_iTouch: number; // 16777432
    static Key_LogOff: number; // 16777433
    static Key_Market: number; // 16777434
    static Key_Meeting: number; // 16777435
    static Key_MenuKB: number; // 16777436
    static Key_MenuPB: number; // 16777437
    static Key_MySites: number; // 16777438
    static Key_News: number; // 16777439
    static Key_OfficeHome: number; // 16777440
    static Key_Option: number; // 16777441
    static Key_Paste: number; // 16777442
    static Key_Phone: number; // 16777443
    static Key_Calendar: number; // 16777444
    static Key_Reply: number; // 16777445
    static Key_Reload: number; // 16777446
    static Key_RotateWindows: number; // 16777447
    static Key_RotationPB: number; // 16777448
    static Key_RotationKB: number; // 16777449
    static Key_Save: number; // 16777450
    static Key_Send: number; // 16777451
    static Key_Spell: number; // 16777452
    static Key_SplitScreen: number; // 16777453
    static Key_Support: number; // 16777454
    static Key_TaskPane: number; // 16777455
    static Key_Terminal: number; // 16777456
    static Key_Tools: number; // 16777457
    static Key_Travel: number; // 16777458
    static Key_Video: number; // 16777459
    static Key_Word: number; // 16777460
    static Key_Xfer: number; // 16777461
    static Key_ZoomIn: number; // 16777462
    static Key_ZoomOut: number; // 16777463
    static Key_Away: number; // 16777464
    static Key_Messenger: number; // 16777465
    static Key_WebCam: number; // 16777466
    static Key_MailForward: number; // 16777467
    static Key_Pictures: number; // 16777468
    static Key_Music: number; // 16777469
    static Key_Battery: number; // 16777470
    static Key_Bluetooth: number; // 16777471
    static Key_WLAN: number; // 16777472
    static Key_UWB: number; // 16777473
    static Key_AudioForward: number; // 16777474
    static Key_AudioRepeat: number; // 16777475
    static Key_AudioRandomPlay: number; // 16777476
    static Key_Subtitle: number; // 16777477
    static Key_AudioCycleTrack: number; // 16777478
    static Key_Time: number; // 16777479
    static Key_Hibernate: number; // 16777480
    static Key_View: number; // 16777481
    static Key_TopMenu: number; // 16777482
    static Key_PowerDown: number; // 16777483
    static Key_Suspend: number; // 16777484
    static Key_ContrastAdjust: number; // 16777485
    static Key_LaunchG: number; // 16777486
    static Key_LaunchH: number; // 16777487
    static Key_MediaLast: number; // 16842751
    static Key_Select: number; // 16842752
    static Key_Yes: number; // 16842753
    static Key_No: number; // 16842754
    static Key_Cancel: number; // 16908289
    static Key_Printer: number; // 16908290
    static Key_Execute: number; // 16908291
    static Key_Sleep: number; // 16908292
    static Key_Play: number; // 16908293
    static Key_Zoom: number; // 16908294
    static Key_Context1: number; // 17825792
    static Key_Context2: number; // 17825793
    static Key_Context3: number; // 17825794
    static Key_Context4: number; // 17825795
    static Key_Call: number; // 17825796
    static Key_Hangup: number; // 17825797
    static Key_Flip: number; // 17825798
    static Key_ToggleCallHangup: number; // 17825799
    static Key_VoiceDial: number; // 17825800
    static Key_LastnumberRedial: number; // 17825801
    static Key_Camera: number; // 17825824
    static Key_CameraFocus: number; // 17825825
    static Key_unknown: number; // 33554431
    //#endregion

    //Properties
    focusPolicy: QtFocusPolicy;
    sizePolicy: QSizePolicy;

    constructor(parent?: QWidget)

    // Methods
    setFocus(): void;
    resize(): QSize;
    resize(w: number, h: number): void;
    resize(size: QSize): void;

    // TODO
    //#region TODO
    x: number;
    y: number;
    globalX: number;
    globalY: number;
    height: number;
    width: number;
    minHeight: number;
    minWidth: number;
    maxHeight: number;
    maxWidth: number;
    palette: QPalette;
    paletteForegroundColor: QColor;
    paletteBackgroundColor: QColor;
    paletteBackgroundPixmap: QPixmap;
    font: QObject;
    enabled: boolean;
    statusTip: String;
    toolTip: String;
    whatsThis: String;
    visible: boolean;
    minimumSizeHint: QSize;

    color0: number; // 0
    color1: number; // 1
    black: number; // 2
    white: number; // 3
    darkGray: number; // 4
    gray: number; // 5
    lightGray: number; // 6
    red: number; // 7
    green: number; // 8
    blue: number; // 9
    cyan: number; // 10
    magenta: number; // 11
    yellow: number; // 12
    darkRed: number; // 13
    darkGreen: number; // 14
    darkBlue: number; // 15
    darkCyan: number; // 16
    darkMagenta: number; // 17
    darkYellow: number; // 18
    transparent: number; // 19
    NoModifier: number; // 0
    ShiftModifier: number; // 33554432
    ControlModifier: number; // 67108864
    AltModifier: number; // 134217728
    MetaModifier: number; // 268435456
    KeypadModifier: number; // 536870912
    GroupSwitchModifier: number; // 1073741824
    KeyboardModifierMask: number; // -33554432
    NoButton: number; // 0
    LeftButton: number; // 1
    RightButton: number; // 2
    MidButton: number; // 4
    MiddleButton: number; // 4
    XButton1: number; // 8
    XButton2: number; // 16
    MouseButtonMask: number; // 255
    Horizontal: number; // 1
    Vertical: number; // 2
    AscendingOrder: number; // 0
    DescendingOrder: number; // 1
    AlignLeft: number; // 1
    AlignLeading: number; // 1
    AlignRight: number; // 2
    AlignTrailing: number; // 2
    AlignHCenter: number; // 4
    AlignJustify: number; // 8
    AlignAbsolute: number; // 16
    AlignHorizontal_Mask: number; // 31
    AlignTop: number; // 32
    AlignBottom: number; // 64
    AlignVCenter: number; // 128
    AlignVertical_Mask: number; // 224
    AlignCenter: number; // 132
    ElideLeft: number; // 0
    ElideRight: number; // 1
    ElideMiddle: number; // 2
    ElideNone: number; // 3
    Widget: number; // 0
    Window: number; // 1
    Dialog: number; // 3
    Sheet: number; // 5
    Drawer: number; // 7
    Popup: number; // 9
    Tool: number; // 11
    ToolTip: number; // 13
    SplashScreen: number; // 15
    Desktop: number; // 17
    SubWindow: number; // 18
    WindowType_Mask: number; // 255
    MSWindowsFixedSizeDialogHint: number; // 256
    MSWindowsOwnDC: number; // 512
    X11BypassWindowManagerHint: number; // 1024
    FramelessWindowHint: number; // 2048
    WindowTitleHint: number; // 4096
    WindowSystemMenuHint: number; // 8192
    WindowMinimizeButtonHint: number; // 16384
    WindowMaximizeButtonHint: number; // 32768
    WindowMinMaxButtonsHint: number; // 49152
    WindowContextHelpButtonHint: number; // 65536
    WindowShadeButtonHint: number; // 131072
    WindowStaysOnTopHint: number; // 262144
    CustomizeWindowHint: number; // 33554432
    WindowStaysOnBottomHint: number; // 67108864
    WindowCloseButtonHint: number; // 134217728
    MacWindowToolBarButtonHint: number; // 268435456
    BypassGraphicsProxyWidget: number; // 536870912
    WindowOkButtonHint: number; // 524288
    WindowCancelButtonHint: number; // 1048576
    WindowSoftkeysVisibleHint: number; // 1073741824
    WindowSoftkeysRespondHint: number; // -2147483648
    WMouseNoMask: number; // 524288
    WDestructiveClose: number; // 1048576
    WStaticContents: number; // 2097152
    WGroupLeader: number; // 4194304
    WShowModal: number; // 8388608
    WNoMousePropagation: number; // 16777216
    WType_TopLevel: number; // 1
    WType_Dialog: number; // 3
    WType_Popup: number; // 9
    WType_Desktop: number; // 17
    WType_Mask: number; // 255
    WStyle_Customize: number; // 0
    WStyle_NormalBorder: number; // 0
    WStyle_DialogBorder: number; // 256
    WStyle_NoBorder: number; // 2048
    WStyle_Title: number; // 4096
    WStyle_SysMenu: number; // 8192
    WStyle_Minimize: number; // 16384
    WStyle_Maximize: number; // 32768
    WStyle_MinMax: number; // 49152
    WStyle_Tool: number; // 11
    WStyle_StaysOnTop: number; // 262144
    WStyle_ContextHelp: number; // 65536
    WPaintDesktop: number; // 0
    WPaintClever: number; // 0
    WX11BypassWM: number; // 1024
    WWinOwnDC: number; // 512
    WMacSheet: number; // 5
    WMacDrawer: number; // 7
    WStyle_Splash: number; // 15
    WNoAutoErase: number; // 0
    WRepaintNoErase: number; // 0
    WNorthWestGravity: number; // 2097152
    WType_Modal: number; // 8388611
    WStyle_Dialog: number; // 3
    WStyle_NoBorderEx: number; // 2048
    WResizeNoErase: number; // 0
    WMacNoSheet: number; // 0
    WindowNoState: number; // 0
    WindowMinimized: number; // 1
    WindowMaximized: number; // 2
    WindowFullScreen: number; // 4
    WindowActive: number; // 8
    WA_Disabled: number; // 0
    WA_UnderMouse: number; // 1
    WA_MouseTracking: number; // 2
    WA_ContentsPropagated: number; // 3
    WA_OpaquePaintEvent: number; // 4
    WA_NoBackground: number; // 4
    WA_StaticContents: number; // 5
    WA_LaidOut: number; // 7
    WA_PaintOnScreen: number; // 8
    WA_NoSystemBackground: number; // 9
    WA_UpdatesDisabled: number; // 10
    WA_Mapped: number; // 11
    WA_MacNoClickThrough: number; // 12
    WA_PaintOutsidePaintEvent: number; // 13
    WA_InputMethodEnabled: number; // 14
    WA_WState_Visible: number; // 15
    WA_WState_Hidden: number; // 16
    WA_ForceDisabled: number; // 32
    WA_KeyCompression: number; // 33
    WA_PendingMoveEvent: number; // 34
    WA_PendingResizeEvent: number; // 35
    WA_SetPalette: number; // 36
    WA_SetFont: number; // 37
    WA_SetCursor: number; // 38
    WA_NoChildEventsFromChildren: number; // 39
    WA_WindowModified: number; // 41
    WA_Resized: number; // 42
    WA_Moved: number; // 43
    WA_PendingUpdate: number; // 44
    WA_InvalidSize: number; // 45
    WA_MacBrushedMetal: number; // 46
    WA_MacMetalStyle: number; // 46
    WA_CustomWhatsThis: number; // 47
    WA_LayoutOnEntireRect: number; // 48
    WA_OutsideWSRange: number; // 49
    WA_GrabbedShortcut: number; // 50
    WA_TransparentForMouseEvents: number; // 51
    WA_PaintUnclipped: number; // 52
    WA_SetWindowIcon: number; // 53
    WA_NoMouseReplay: number; // 54
    WA_DeleteOnClose: number; // 55
    WA_RightToLeft: number; // 56
    WA_SetLayoutDirection: number; // 57
    WA_NoChildEventsForParent: number; // 58
    WA_ForceUpdatesDisabled: number; // 59
    WA_WState_Created: number; // 60
    WA_WState_CompressKeys: number; // 61
    WA_WState_InPaintEvent: number; // 62
    WA_WState_Reparented: number; // 63
    WA_WState_ConfigPending: number; // 64
    WA_WState_Polished: number; // 66
    WA_WState_DND: number; // 67
    WA_WState_OwnSizePolicy: number; // 68
    WA_WState_ExplicitShowHide: number; // 69
    WA_ShowModal: number; // 70
    WA_MouseNoMask: number; // 71
    WA_GroupLeader: number; // 72
    WA_NoMousePropagation: number; // 73
    WA_Hover: number; // 74
    WA_InputMethodTransparent: number; // 75
    WA_QuitOnClose: number; // 76
    WA_KeyboardFocusChange: number; // 77
    WA_AcceptDrops: number; // 78
    WA_DropSiteRegistered: number; // 79
    WA_ForceAcceptDrops: number; // 79
    WA_WindowPropagation: number; // 80
    WA_NoX11EventCompression: number; // 81
    WA_TintedBackground: number; // 82
    WA_X11OpenGLOverlay: number; // 83
    WA_AlwaysShowToolTips: number; // 84
    WA_MacOpaqueSizeGrip: number; // 85
    WA_SetStyle: number; // 86
    WA_SetLocale: number; // 87
    WA_MacShowFocusRect: number; // 88
    WA_MacNormalSize: number; // 89
    WA_MacSmallSize: number; // 90
    WA_MacMiniSize: number; // 91
    WA_LayoutUsesWidgetRect: number; // 92
    WA_StyledBackground: number; // 93
    WA_MSWindowsUseDirect3D: number; // 94
    WA_CanHostQMdiSubWindowTitleBar: number; // 95
    WA_MacAlwaysShowToolWindow: number; // 96
    WA_StyleSheet: number; // 97
    WA_ShowWithoutActivating: number; // 98
    WA_X11BypassTransientForHint: number; // 99
    WA_NativeWindow: number; // 100
    WA_DontCreateNativeAncestors: number; // 101
    WA_MacVariableSize: number; // 102
    WA_DontShowOnScreen: number; // 103
    WA_X11NetWmWindowTypeDesktop: number; // 104
    WA_X11NetWmWindowTypeDock: number; // 105
    WA_X11NetWmWindowTypeToolBar: number; // 106
    WA_X11NetWmWindowTypeMenu: number; // 107
    WA_X11NetWmWindowTypeUtility: number; // 108
    WA_X11NetWmWindowTypeSplash: number; // 109
    WA_X11NetWmWindowTypeDialog: number; // 110
    WA_X11NetWmWindowTypeDropDownMenu: number; // 111
    WA_X11NetWmWindowTypePopupMenu: number; // 112
    WA_X11NetWmWindowTypeToolTip: number; // 113
    WA_X11NetWmWindowTypeNotification: number; // 114
    WA_X11NetWmWindowTypeCombo: number; // 115
    WA_X11NetWmWindowTypeDND: number; // 116
    WA_MacFrameworkScaled: number; // 117
    WA_SetWindowModality: number; // 118
    WA_WState_WindowOpacitySet: number; // 119
    WA_TranslucentBackground: number; // 120
    WA_AcceptTouchEvents: number; // 121
    WA_WState_AcceptedTouchBeginEvent: number; // 122
    WA_TouchPadAcceptSingleTouchEvents: number; // 123
    WA_MergeSoftkeys: number; // 124
    WA_MergeSoftkeysRecursively: number; // 125
    WA_LockPortraitOrientation: number; // 128
    WA_LockLandscapeOrientation: number; // 129
    WA_AutoOrientation: number; // 130
    WA_X11DoNotAcceptFocus: number; // 132
    WA_SymbianNoSystemRotation: number; // 133
    WA_MacNoShadow: number; // 134
    WA_AttributeCount: number; // 135
    AA_ImmediateWidgetCreation: number; // 0
    AA_MSWindowsUseDirect3DByDefault: number; // 1
    AA_DontShowIconsInMenus: number; // 2
    AA_NativeWindows: number; // 3
    AA_DontCreateNativeWidgetSiblings: number; // 4
    AA_MacPluginApplication: number; // 5
    AA_DontUseNativeMenuBar: number; // 6
    AA_MacDontSwapCtrlAndMeta: number; // 7
    AA_S60DontConstructApplicationPanes: number; // 8
    AA_S60DisablePartialScreenInputMode: number; // 9
    AA_X11InitThreads: number; // 10
    AA_CaptureMultimediaKeys: number; // 11
    AA_AttributeCount: number; // 12
    ColorMode_Mask: number; // 3
    AutoColor: number; // 0
    ColorOnly: number; // 3
    MonoOnly: number; // 2
    AlphaDither_Mask: number; // 12
    ThresholdAlphaDither: number; // 0
    OrderedAlphaDither: number; // 4
    DiffuseAlphaDither: number; // 8
    NoAlpha: number; // 12
    Dither_Mask: number; // 48
    DiffuseDither: number; // 0
    OrderedDither: number; // 16
    ThresholdDither: number; // 32
    DitherMode_Mask: number; // 192
    AutoDither: number; // 0
    PreferDither: number; // 64
    AvoidDither: number; // 128
    NoOpaqueDetection: number; // 256
    NoFormatConversion: number; // 512
    TransparentMode: number; // 0
    OpaqueMode: number; // 1
    NoArrow: number; // 0
    UpArrow: number; // 1
    DownArrow: number; // 2
    LeftArrow: number; // 3
    RightArrow: number; // 4
    NoPen: number; // 0
    SolidLine: number; // 1
    DashLine: number; // 2
    DotLine: number; // 3
    DashDotLine: number; // 4
    DashDotDotLine: number; // 5
    CustomDashLine: number; // 6
    FlatCap: number; // 0
    SquareCap: number; // 16
    RoundCap: number; // 32
    MPenCapStyle: number; // 48
    MiterJoin: number; // 0
    BevelJoin: number; // 64
    RoundJoin: number; // 128
    SvgMiterJoin: number; // 256
    MPenJoinStyle: number; // 448
    NoBrush: number; // 0
    SolidPattern: number; // 1
    Dense1Pattern: number; // 2
    Dense2Pattern: number; // 3
    Dense3Pattern: number; // 4
    Dense4Pattern: number; // 5
    Dense5Pattern: number; // 6
    Dense6Pattern: number; // 7
    Dense7Pattern: number; // 8
    HorPattern: number; // 9
    VerPattern: number; // 10
    CrossPattern: number; // 11
    BDiagPattern: number; // 12
    FDiagPattern: number; // 13
    DiagCrossPattern: number; // 14
    LinearGradientPattern: number; // 15
    RadialGradientPattern: number; // 16
    ConicalGradientPattern: number; // 17
    TexturePattern: number; // 24
    AbsoluteSize: number; // 0
    RelativeSize: number; // 1
    ArrowCursor: number; // 0
    UpArrowCursor: number; // 1
    CrossCursor: number; // 2
    WaitCursor: number; // 3
    IBeamCursor: number; // 4
    SizeVerCursor: number; // 5
    SizeHorCursor: number; // 6
    SizeBDiagCursor: number; // 7
    SizeFDiagCursor: number; // 8
    SizeAllCursor: number; // 9
    BlankCursor: number; // 10
    SplitVCursor: number; // 11
    SplitHCursor: number; // 12
    PointingHandCursor: number; // 13
    ForbiddenCursor: number; // 14
    WhatsThisCursor: number; // 15
    BusyCursor: number; // 16
    OpenHandCursor: number; // 17
    ClosedHandCursor: number; // 18
    DragCopyCursor: number; // 19
    DragMoveCursor: number; // 20
    DragLinkCursor: number; // 21
    LastCursor: number; // 21
    BitmapCursor: number; // 24
    CustomCursor: number; // 25
    PlainText: number; // 0
    RichText: number; // 1
    AutoText: number; // 2
    LogText: number; // 3
    IgnoreAspectRatio: number; // 0
    KeepAspectRatio: number; // 1
    KeepAspectRatioByExpanding: number; // 2
    LeftDockWidgetArea: number; // 1
    RightDockWidgetArea: number; // 2
    TopDockWidgetArea: number; // 4
    BottomDockWidgetArea: number; // 8
    DockWidgetArea_Mask: number; // 15
    AllDockWidgetAreas: number; // 15
    NoDockWidgetArea: number; // 0
    LeftToolBarArea: number; // 1
    RightToolBarArea: number; // 2
    TopToolBarArea: number; // 4
    BottomToolBarArea: number; // 8
    ToolBarArea_Mask: number; // 15
    AllToolBarAreas: number; // 15
    NoToolBarArea: number; // 0
    TextDate: number; // 0
    ISODate: number; // 1
    SystemLocaleDate: number; // 2
    LocalDate: number; // 2
    LocaleDate: number; // 3
    SystemLocaleShortDate: number; // 4
    SystemLocaleLongDate: number; // 5
    DefaultLocaleShortDate: number; // 6
    DefaultLocaleLongDate: number; // 7
    LocalTime: number; // 0
    UTC: number; // 1
    OffsetFromUTC: number; // 2
    Monday: number; // 1
    Tuesday: number; // 2
    Wednesday: number; // 3
    Thursday: number; // 4
    Friday: number; // 5
    Saturday: number; // 6
    Sunday: number; // 7
    ScrollBarAsNeeded: number; // 0
    ScrollBarAlwaysOff: number; // 1
    ScrollBarAlwaysOn: number; // 2
    FixedColor: number; // 0
    FixedPixmap: number; // 1
    NoBackground: number; // 2
    PaletteForeground: number; // 3
    PaletteButton: number; // 4
    PaletteLight: number; // 5
    PaletteMidlight: number; // 6
    PaletteDark: number; // 7
    PaletteMid: number; // 8
    PaletteText: number; // 9
    PaletteBrightText: number; // 10
    PaletteBase: number; // 11
    PaletteBackground: number; // 12
    PaletteShadow: number; // 13
    PaletteHighlight: number; // 14
    PaletteHighlightedText: number; // 15
    PaletteButtonText: number; // 16
    PaletteLink: number; // 17
    PaletteLinkVisited: number; // 18
    X11ParentRelative: number; // 19
    CaseInsensitive: number; // 0
    CaseSensitive: number; // 1
    TopLeftCorner: number; // 0
    TopRightCorner: number; // 1
    BottomLeftCorner: number; // 2
    BottomRightCorner: number; // 3
    AutoConnection: number; // 0
    DirectConnection: number; // 1
    QueuedConnection: number; // 2
    AutoCompatConnection: number; // 3
    BlockingQueuedConnection: number; // 4
    UniqueConnection: number; // 128
    WidgetShortcut: number; // 0
    WindowShortcut: number; // 1
    ApplicationShortcut: number; // 2
    WidgetWithChildrenShortcut: number; // 3
    OddEvenFill: number; // 0
    WindingFill: number; // 1
    MaskInColor: number; // 0
    MaskOutColor: number; // 1
    NoClip: number; // 0
    ReplaceClip: number; // 1
    IntersectClip: number; // 2
    UniteClip: number; // 3
    ContainsItemShape: number; // 0
    IntersectsItemShape: number; // 1
    ContainsItemBoundingRect: number; // 2
    IntersectsItemBoundingRect: number; // 3
    FastTransformation: number; // 0
    SmoothTransformation: number; // 1
    XAxis: number; // 0
    YAxis: number; // 1
    ZAxis: number; // 2
    NoContextMenu: number; // 0
    DefaultContextMenu: number; // 1
    ActionsContextMenu: number; // 2
    CustomContextMenu: number; // 3
    PreventContextMenu: number; // 4
    ImhNone: number; // 0
    ImhHiddenText: number; // 1
    ImhNoAutoUppercase: number; // 2
    ImhPrefernumbers: number; // 4
    ImhPreferUppercase: number; // 8
    ImhPreferLowercase: number; // 16
    ImhNoPredictiveText: number; // 32
    ImhDigitsOnly: number; // 65536
    ImhFormattednumbersOnly: number; // 131072
    ImhUppercaseOnly: number; // 262144
    ImhLowercaseOnly: number; // 524288
    ImhDialableCharactersOnly: number; // 1048576
    ImhEmailCharactersOnly: number; // 2097152
    ImhUrlCharactersOnly: number; // 4194304
    ImhExclusiveInputMask: number; // -65536
    ToolButtonIconOnly: number; // 0
    ToolButtonTextOnly: number; // 1
    ToolButtonTextBesideIcon: number; // 2
    ToolButtonTextUnderIcon: number; // 3
    ToolButtonFollowStyle: number; // 4
    LeftToRight: number; // 0
    RightToLeft: number; // 1
    LayoutDirectionAuto: number; // 2
    CopyAction: number; // 1
    MoveAction: number; // 2
    LinkAction: number; // 4
    ActionMask: number; // 255
    TargetMoveAction: number; // 32770
    IgnoreAction: number; // 0
    Unchecked: number; // 0
    PartiallyChecked: number; // 1
    Checked: number; // 2
    NoItemFlags: number; // 0
    ItemIsSelectable: number; // 1
    ItemIsEditable: number; // 2
    ItemIsDragEnabled: number; // 4
    ItemIsDropEnabled: number; // 8
    ItemIsUserCheckable: number; // 16
    ItemIsEnabled: number; // 32
    ItemIsTristate: number; // 64
    MatchExactly: number; // 0
    MatchContains: number; // 1
    MatchStartsWith: number; // 2
    MatchEndsWith: number; // 3
    MatchRegExp: number; // 4
    MatchWildcard: number; // 5
    MatchFixedString: number; // 8
    MatchCaseSensitive: number; // 16
    MatchWrap: number; // 32
    MatchRecursive: number; // 64
    NonModal: number; // 0
    WindowModal: number; // 1
    ApplicationModal: number; // 2
    NoTextInteraction: number; // 0
    TextSelectableByMouse: number; // 1
    TextSelectableByKeyboard: number; // 2
    LinksAccessibleByMouse: number; // 4
    LinksAccessibleByKeyboard: number; // 8
    TextEditable: number; // 16
    TextEditorInteraction: number; // 19
    TextBrowserInteraction: number; // 13
    MinimumSize: number; // 0
    PreferredSize: number; // 1
    MaximumSize: number; // 2
    MinimumDescent: number; // 3
    NSizeHints: number; // 4
    NoGesture: number; // 0
    GestureStarted: number; // 1
    GestureUpdated: number; // 2
    GestureFinished: number; // 3
    GestureCanceled: number; // 4
    TapGesture: number; // 1
    TapAndHoldGesture: number; // 2
    PanGesture: number; // 3
    PinchGesture: number; // 4
    SwipeGesture: number; // 5
    CustomGesture: number; // 256
    LastGestureType: number; // -1
    LogicalMoveStyle: number; // 0
    VisualMoveStyle: number; // 1
    //#endregion
}