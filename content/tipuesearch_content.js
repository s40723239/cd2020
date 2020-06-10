var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Assignment', 'text': '', 'tags': '', 'url': 'Assignment.html'}, {'title': 'Assignment1', 'text': 'PDF心得 /downloads/Simulation 統整.pdf \n 作業一: 1.請描述如何針對該課程進行有效的隨機分組，或者隨機進行點名？ 2.描述如何為Windows 10 64位系統準備一個可移植的Python編程系統，以允許在Github上維護CMSiMDE網站，Pelican博客和js演示文稿？ 3.您需要從 http://www.coppeliarobotics.com/helpFiles/index.html 了解什麼來實現四輪機器人？ \n Random grouping 亂數分組程式 \n 描述如何針對該課程進行有效隨機分組，或隨機點名 ? \n 要進行隨機分組及隨機點名，必須先了解程式裡導入的模組及在模組中所用的  語法、迴圈 : request、ast.literal_eval、random、for迴圈 \n \n request模組 : 此模組是為了可以使用  Python  來下載網頁上的資料，是以request模組建立適當的  HTTP  請求，透過  HTTP  請求從網頁伺服器下載指定的資料，分為兩種模式 Post 、 Get 。  參考文獻 :\xa0 https://ithelp.ithome.com.tw/articles/10206215 \n ast模組 :  此模組是 python 原始碼到位元組碼的一種中間產物，其中的語法literal_eval是為了能夠安全地評估表達式節點或包含 Python 文字或容器顯示的字符串。提供的字符串或節點只能由以下 Python 文字結構組成：字符串、字節、數字、元組、列表、字典、集合、布林值、 None 。  參考文獻 :\xa0 https://docs.python.org/3/library/ast.html   https://www.itread01.com/content/1544847254.html \n random模組 : 此模組用於生成偽隨機數，且有許多種用法，例如 : 隨機選取choice、隨機選取sample\xa0(一次選多筆資料 ) 、隨機調換順序\xa0shuffle\xa0(就地調換順序 ) 、隨機取得亂數 \xa0 random\xa0(0~1之間的隨機亂數 ) 、隨機取得亂數 \xa0 uniform\xa0(可以指定範圍 ) 。  參考文獻 :\xa0 https://ithelp.ithome.com.tw/articles/10207483   (4)\xa0for迴圈 :  在處理資料的時候，時常會需要重複執行某些相同的步驟；而迴圈  (loop)  的作用是讓指定的某段敘述在條件符合的情況下一直重覆執行，是程式設計中很重要的一種控制結構，且分為兩類 : for、while \n \n ○\xa0for迴圈基本語法 : for\xa0變數 \xa0 in\xa0list、字串、range  ○\xa0while迴圈基本語法 : while\xa0布林值   \xa0for迴圈及while迴圈比較 : \xa0for迴圈比較適用在已知迴圈數的問題，而   while迴圈則適用在「無法預知迴圈數」的問題上。   參考文獻 : \xa0https://medium.com/ccclub/ccclub-python-for-beginners-tutorial4990a5757aa6  \xa0總結 : 在隨機分組及抽點的程式中，利用 request 模組中的 request.get(link)   語法將網址中的學員學號資料擷取下來，接著利用 ast 模組中的 ast.literal_eval 語法將資料原始碼進行分析並轉換，再來利用 random 中的 random.suffle 語法及 for 迴圈將學員學號打亂並進行分組或抽點。在隨機分組及抽點的程式碼，要更加有效的執行隨機分組及點名，要先了解其中的模組及語法，然而從中進行修改。 \n Four wheel car 四輪車 \n 您需要從 http://www.coppeliarobotics.com/helpFiles/index.html 了解什麼來實現四輪機器人？ \n 部分內容翻譯概述:   Simulation \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 透過這一章可以清楚的知道關於模擬的一些運作細節及流程，介紹了仿真循環、仿真速度，盡可能達到與實際操作的時間相同，通過嘗試使仿真時間與實時保持同步來支持實時仿真，由於計算機能力有限無法進行仿真，但我們可以使用調整模擬速度的功能，總之要完成四輪車模擬必須熟悉模擬系統。 \n Simulation settings dialog :  \xa0 在任何機器製作完成後，都需要進行模擬測試，以確保機器能正常運作，或者測試機器的耐用性及安全性。在這章節主要說明了如何建立模擬，也教了如何調整模擬的速度，這能使我們模擬起來更有效率，接著就是模擬對話框的基本操作，其中也講解了在模擬過程可能會發生的狀況及解決方法，像是模擬速度調高或調慢，會造成不穩定或不準確的模擬，反之；還有因硬體的效能不足而造成模擬之屏幕刷新率太慢。   BubbleRob tutorial :  \xa0 此教程主要在教如何設置bubbleRob機器人，在上學期我們有實際操作過，其中的內容包含如何建立模型、設置感測器、調整視覺感測器，建立模型包含機器人本體、車輪、支撐滑塊、障礙物，不只是設置模型外型及尺寸，還要設置模型的物理屬性；設置感測器則是為了偵測障礙物，讓機器人能順利避開障礙物；視覺感測器則是為了能夠讓我們在機器人模擬時觀察機器人前方狀況。 \n Line following BubbleRob tutorial :  \xa0在此教程中，旨在擴展BubbleRob的功能，以使BubbleRob遵循地面上的規則，也就是調整視覺感測器並設置路徑及給定程式碼，使機器人能隨著路徑運作。   External controller tutorial :  \xa0 此教程說明好幾種方式能從外部控制機器人及模擬機器人，最方便的就是編寫程式碼直接附加到場景；另外還有利用編寫插件的方法，但此方法編寫程序更加複雜；第三種就是使用遠端API，此方法非常便捷也可以使用與運行真實機器人完全相同的程式碼來控制或模擬模型（例如虛擬機器人）:第四種方法是通過ROS節點，ROS與遠程API相似，是使多個分佈式進程相互連接的便捷方法；第五種是透過BlueZero（BØ）節點，與ROS類似，BlueZero是使多個分佈式進程相互連接的一種便捷方法，並且是一種輕量級的跨平台解決方案。 \n 總結:  \xa0 最後要完成四輪機器人必須了解模擬程式的操作，包含模型的設置及各模型組合、各模型的物理特性設置、感測器設置、視覺感測器設置、外部控制器的選擇及設置、路徑程式碼設置，還有模擬時會發生的狀況處理，須達到這些基本的設置才能完成四輪機器人的設計。 \n Portable system \n 1.在隨身系統下新增一個資料夾cd2020，並在cd2020下新建資料夾data，接著在data下新增資料夾py382及wscite432、portablegit。  2.進入 Python 官網。  3.點選Downloads下的 Windows ，並點選 Latest Python 3 Release - Python 3.8.2 。 \n 4.找到 Windows x86-64 executable installer 並下載。 \n 5.開始下載，必須將pip選項取消，接著按下next並將檔案下載至資料夾py382 \n 6.下載SciTE系統\xa0 full 64-bit download ，下載完後解壓縮至data下的wscite432。 \n 7.建立新的start.bat及stop.bat。 \n 8.下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。  9.下載PortableGit\xa0 64-bit Git for Windows Portable \xa0至\xa0portablegit下。  10.安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。  11.執行指令，將python3.8.2版本缺少的模組下載下來。 \n start.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n \n \n \n @echo   off \n set   Disk = y \n subst  % Disk % :  "data" \n \xa0 \xa0 \n % Disk % : \n \xa0 \xa0 \n set   HomePath = % Disk % :\\home \n set   HomeDrive = % Disk % :\\home \n set   Home = % Disk % :\\home \n set   USERPROFILE = % Disk % :\\home \n \xa0 \xa0 \n REM 將系統 Python 程式的 io 設為 utf - 8 \n set   PYTHONIOENCODING = "utf-8" \n \xa0 \xa0 \n #REM for putty \n #Set GIT_HOME=%CDisk%:\\portablegit\\bin\\ \n #Set GIT_SSH=%Disk%:\\putty\\plink.exe \n \xa0 \xa0 \n set   PYTHONPATH = % Disk % :\\py382\\DLLs; % Disk % :\\py382\\Lib; % Disk % :\\py382\\Lib\\site - packages; \n set   PYTHONHOME = % Disk % :\\py382 \n \xa0 \xa0 \n set   path_python = % Disk % :\\py382; % Disk % :\\py382\\Scripts; \n set   path_msys2 = % Disk % :\\msys64\\mingw64\\ bin ; \n set   path_git = % Disk % :\\portablegit\\ bin ; \n set   path_tcc = % Disk % :\\tcc; \n \xa0 \xa0 \n path = % Disk % :; % path_python % ; % path_msys2 % ; % path_git % ; % path_tcc % ; \n \xa0 \xa0 \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n \xa0 \xa0 \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n \xa0 \xa0 \n Exit \n \n \n \n \n \n \n \n stop.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n \n \n \n @echo   off \n set   Disk = y \n path = % PATH % ; \n \xa0 \xa0 \n taskkill  / IM python.exe  / F \n taskkill  / IM pythonw.exe  / F \n taskkill  / IM scite.exe  / F \n \xa0 \xa0 \n REM 終止虛擬硬碟與目錄的對應 \n subst  % Disk % :  / D \n REM 關閉 cmd 指令視窗 \n taskkill  / IM cmd.exe  / F \n \xa0 \xa0 \n EXIT \n \n \n \n \n \n \n \n \xa0 \n 8. 下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。 9. 下載 PortableGit\xa0 64-bit Git for Windows Portable\xa0 至\xa0 portablegit下。 10 .安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。 11.執行指令 ，將python3.8.2版本缺少的模組下載下來。 \n \n \n \n \n \n \n 1 \n \n \n \n python get - pip.py \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 2 \n \n \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n \n \n \n \n \n \n', 'tags': '', 'url': 'Assignment1.html'}, {'title': 'Assignment2', 'text': 'PDF檔心得 \n 1.2確定設計過程 \n 1.2.1確定每個人的設計過程 \n 有經驗的儘管所有轉錄數據都包含與設計過程有關的信息，它們都與其他內容混合在一起，包括情況項目的目標，目標，角色，必要的技能和知識，我們首先提出通過審查相關文獻以識別“過程要素”來建立編碼框架用於構建設計過程的文件。 \n 產品開發及其活動為信息過程。收集，創建，解釋，轉換和轉移。 \n Ulrich和 Eppinger （ 2012 ）將其描述為必要的信息對於注入的最終結果以轉化當前的設計問題解決下一個問題，以降低不確定性，從而產生產出，直到最終的結果就形成了。這被建模為轉換將功能規格（輸入）轉換為人工規格（輸出） \n （ Takeda ， Veerkamp ，＆ Yoshikawa ， 1990; Tomiyama ＆ Yoshikawa ， 1986 ）。 \n Browning和 Ramasesh （ 2007 ）指出，採用信息處理的觀點未能捕獲完整的信息流 \n 因為對交互的了解很少。他們認為確定組織單位之間的互動，因為它們會產生依賴性 \n 建立可交付流程模式的活動之間。總之，從這個角度來看，過程建模的基本元素是 \n 用 IPO （ InputeProcesseOutput ）表示形式概括為“信息流”以及組織單位（人員，團隊，公司，等等。）。 \n 工程設計過程模型 \n 由 Pahl 等人提出。 （ 2007 年）證明了每個階段。第一階段的輸入是“任務”，結果是“規範”再次進入下一階段。這樣，繪製連接輸入和結果的連續發展階段出來。關於“任務”和“設計活動” \n 任務和評估結果。通常，評估發生在相對在很短的時間內決定“前進，重複或下降”。因此，我們命名了這些類型的活動（評估，設計審查，登門檢查，決策 - 此時，我們有兩個編碼類別：“任務”和“事件”。總而言之，我們可以使用四個編碼對設計過程進行建模 \n 類別； “任務”，“事件”，“信息流”和“互動”，並且可以是用階段的連接來表示。至此，設計階段流程可以用“  inputetask （設計活動） eevent （決策）以下內容描述瞭如何對過程元素進行編碼。 \n 信息流：信息流是在任務或事件時生成的發生。它總是伴隨著輸入和輸出。 \n 工程的輸入 : \n 設計活動。我們對“從 ID 到 ED 的 3D CAD 數據”進行了編碼。 \n 互動：發生任務或事件時，兩組經常 \n 相互作用。例如，工業設計師檢查內部是否 \n 工程設計師建議他們通過提供空間來修改空間 \n 我們從每個轉錄的訪談數據中識別出流程要素。 \n 我們盡可能用參與者自己的話語標記他們。我們用了字段註釋作為補充數據源。在這樣做的同時，我們安排按時間順序將編碼後的元素按流程圖格式連接構建部分設計過程。該方法被廣泛採用以可視化工業流程模型（ Vergidis ， Tiwari 和 Majeed ， 2008 年）。我們也確定了設計過程中涉及的項目類型和目標 \n 採訪數據。兩名研究人員執行了整個程序。一研究人員首先構建了部分設計流程，另一研究人員通過檢查採訪數據檢查了他們。結果，我們獲得了 45 部分公司使用 7-9 進行的部分設計過程（請參見表 2 ）。 \n \n 1.2.2確定協作產品設計流程 \n 下一步是將每個公司的設計流程整合到協作中 \n 通過“馬賽克方法”進行設計過程。我們首先收集了部分設計 \n 公司中特定項目的流程。之後，我們通過比較和合併部分過程，合併過程元素。從工業設計師那裡提取的部分過程訪談數據提供了有關工業設計活動的豐富信息，包括與工程設計師的互動行為，但信息較少純工程設計活動。工程界也是如此設計。 \n 我們將公司的工業設計師的部分流程合併到了圍繞工業設計活動重建設計流程。在同一時間，我們利用工程設計師提供的信息來補充並從工程設計方面加強設計活動。我們圍繞同一工程設計活動重新構建設計流程辦法。我們最終將這兩個設計過程合併為一個協作產品設計過程。在鑲嵌方法中，結合交叉檢查的部分過程 \n 有助於提高可靠性和通用性。這明顯減少了構建信息不完整的流程的可能性 \n 通過抵消彼此的信息。因此，“馬賽克方法”減少了構建錯誤過程的可能性。 \n 最後，我們通過合併階段元素（輸入，任務，事件和輸出）放入框中，並用相關任務將其命名（請參見圖 2 ）。例如，工業設計師開始繪製各種想法根據前一階段的研究結果繪製的草圖。然後，他們選擇一個通過評估獲得一些最佳草圖。根據選擇結果，他們決定進入下一階段或重複當前階段。因此，‘理想草圖階段由“研究結果（輸入），“想法草圖（任務）”，“評估”（事件）和“最佳草圖（輸出）”。 \n \n 1.2.3簡化流程 \n 一旦制定了每個公司的協作產品設計流程，我們對它們進行了分類，以確定其類型，目的和條件。但是，由於每個公司的流程都包含詳細的設計操作和信息， \n 直接在公司之間進行比較並不容易。從而，我們以“流程”的概念簡化了每個公司的設計流程塊以幫助其可比性，同時保持必要的特徵。 \n 我們發現在一組小的連續階段中存在一種模式。那裡是完成所有連續階段的主要工作。完成後明確的新階段從另一項工作開始。我們將這些小階段定義為“流程塊”。其特點是初始輸入，內部迭代，決策，最終結果和不可逆的趨勢（圖 4 ）。 \n 內置的流程塊中的流程從初始輸入開始，跨小範圍運行裡面的階段。迭代或反饋可能在內部的小階段之間發生大塊。最後，他們對最終結果做出最終決定。 \n 這是一個里程碑，指示該階段將跳到下一階段。 \n 例如，在圖 3 中藍色方框中，該塊的主要工作是制定執行六個小階段的設計概念。當他們在渲染階段，如果渲染結果，他們可以回到構思草圖階段 \n 對渲染評估事件不滿意。在最後階段，設計樣機，因為結果由高層管理人員確認，並且然後跳到“產品計劃會議”。 \n 兩個流程塊之間的流程幾乎沒有機會在前一個結果進入下一個塊的輸入之後反轉。 \n 跨團隊通常進行最終設計，並由每個部門的最高經理。返回上一個塊意味著它 \n 無法滿足投放市場的時間表。因此，應該有一個最高管理層關於這個問題的決定。階段之間的反向迭代或反饋在實際情況中很少發生。它發生在一個塊中的各個階段之間。因此，似乎項目之間幾乎不可能放棄階段，但可能在階段之間。 \n 我們通過其主要工作來命名流程塊。在命名塊時， \n 我們發現，“概念設計”一詞在工程上的用法有所不同 \n 設計和工業設計。工程設計中的概念設計是關於通過開發廣泛的解決方案與產品的工作原理相關的技術概念（ Haik ＆ Shahin ， 2010; Kroll ， Condoor 和 Jansson ， 2001 ；烏爾曼， 2009 年）。但是，工業設計師在概念設計中決定產品樣式和交互的方向階段，以概念關鍵字，情緒板，想法表示草圖和用戶場景（ Press ＆ Cooper ， 2003; Tovey ＆ Harris ， 1999;Vredenburg ， Isensee ， Righi 和 Design ， 2001 年）。因此，我們標記了這個概念 \n', 'tags': '', 'url': 'Assignment2.html'}, {'title': 'Assignment3', 'text': 'MechaFutureAndChallenges \n PDF檔心得 \n 第 1 章機電期貨 \n \xa01.1挑戰 \n \xa0自 Tetsuro Mori 提出機電一體化系統的概念以來，已有 40 多年的時間，以表述其日益增長的影響。電子元件本身就具有控制和操作的能力，機械系統是一個重要的時期，快速的技術變革。特別是，內部的重點已經轉移從硬件到固件和軟件的系統，導致引入圍繞智能設備的使用構建的各種消費品，他們中的許多人本質上仍然是機電一體化的，包括越來越複雜的電子產品和軟件。當與增強的本地和遠程通信結合使用時，導致基於智能對象能力的系統的發展相互通信，從而根據上下文。 \n 反過來，這導致了諸如網絡物理等概念的發展 驅動交互的系統，物聯網和大數據通過智能對象和信息的組合。用戶通過智能對象訪問的結構利用各種通常不為人知或看不見的資源提供的資源。 \n \xa0表 1.1 所表示的準備金的增長也導致了增加複雜的用戶系統（例如智能手機）的可用性，並越來越多地融合了高質量的靜態和視頻成像功能。與傳統相機相比，它們現在負責的圖像更多。它還導致引入了一系列用於行為監控的用戶設備，智能手錶和平板電腦，它們都可以與其他通過互聯網媒介的智能設備。一起說明了此類設備的日常使用情況。對機電一體化的設計，開發和實施有影響系統，以及機電一體化本身的未來。 \n \xa02014年，在瑞典的卡爾斯塔德，來自世界各地的許多從業者被問到一言以蔽之，提供他們對所面臨的最重大挑戰的看法由機電一體化在未來的幾年中。收到的響應如圖 1.5 所示。並將在本章以下各節中進行詳細討論。 \n \xa01.2挑戰 \n \xa0通過以上回答，關鍵問題可以總結為： \n 設計 \n 隱私和安全 \n 複雜性與道德 \n 人口老齡化 \n 用戶 \n 可持續發展 \n 教育 \n 以下各節將簡要討論其中的每一個。 \n \xa01.2.1設計 \n \xa0工程設計的常規方法通常遵循以下路徑： \n 由圖 1.6 的簡化 V 模型定義的，並實現了集成，通過結構化的系統定義，然後進行系統開發過程並適當的測試制度支持的驗證，以支持驗證和驗證。各個模塊和子模塊，包括來自外部的模塊和子模塊，然後通過規範，測試，驗證和驗證以確保整體系統功能。 \n \xa0通過協同互動，這種方法已經發展了許多年，在設計理論和設計實踐之間。但是，在這種情況下，設計理論必然不可避免地落後於實踐，在這種實踐中，人們正在探索新技術所提供的可能性，也許沒有必要完全理解能力或含義。 \n \xa0在網絡物理系統和物聯網的情況下，系統是一個動態實體，智能對象根據上下文和需求進入或離開。在大多數情況下，基於雲端的組件在被採用之前對於用戶是未知的，並且同樣可能適用於任何功能性智能對象。這給設計師帶來了以下問題，確保系統不易被其包容，同時認識到系統根據需要進行自我配置的能力。 \n 因此，從本質上講，用戶指定了系統功能和內容，之後系統自動配置從雲端中選擇具有信息的所需軟件和數據組件，然後成為其價值由用戶上下文確定的商品。涉及物理組件的地方，例如 : 在智能家居環境中，標識和選擇將由用戶指導。設計人員面臨的挑戰是提供工具，以使動態系統配置的影響能夠在設計過程的最早階段就被探索，並將這些結果集成到設備功能中， 適當程度。 \n \xa01.2.2隱私和安全 \n \xa0許多與物聯網相關的設備都具有收集大量個人數據的能力，其中許多可能保存在用戶不知道的區域和方式中。然後，對這些數據進行分析的可能性以及相關的曲解的風險會影響隱私。但是，這必須是平衡潛在的提取有益知識的能力，尤其是在基於 eIoT 等基於 IoT 的應用程序的上下文中。在更廣泛的安全性範圍內，系統在個人和公司級別上保護自身免受入侵的能力越來越重要。表 1.2 根據信息系統審計與控制協會進行的調查顯示了感知到的威脅級別。 \n \xa0因此很明顯，系統設計人員的負擔越來越重。將隱私放在其設計過程的核心內物聯網，網絡物理系統和大數據，並且必須反映在設計過程本身以及支持該過程的方法和工具中。 \n \xa01.2.3複雜性與道德 \n \xa0隨著系統變得越來越複雜並開始以更大的自主性運行，所有利益相關者理解其能力的能力引發了問題。從醫療保健到自動駕駛汽車的各種應用和環境的特性和功能。在將一個人或多個人的福祉或生命責任委託給系統的情況下尤其如此。其他問題包括： \n \xa0技術的雙重用途 - 無人機等技術可以有益的應用，例如在作物管理中，也用於軍事和其他目的。 \n 技術對環境的影響，技術的引入，進入環境可能會以多種方式破壞和改變該環境，即使潛在意圖是良性的。 \n 技術對全球財富分配的影響 - 技術的使用 gies 可以增加不同社會群體之間的距離，即使在同一國家也是如此。 \n 數字鴻溝和相關的社會技術鴻溝 - 訪問和使用服務程序的能力之間的差距越來越大，通過雲端計算。 \n 確保公平獲取技術 - 控制對技術的訪問可能會限制開發。 \n 技術成癮，個人沉迷於技術他們使用的。 \n 技術鎖定，個人可以被鎖定到特定的技術中， gies ，一個簡單的例子就是在 Apple 和 Android 之間進行選擇。 \n 人類的非人性化和擬人化通過消除責任感他們的活動和福祉的能力。 \n \xa01.2.4人口老齡化 \n \xa0面對人口老齡化，圖 1.7 顯示了過去和預期的變化。歐洲各年齡段的分佈情況，人們提出了一些問題，即如何最好地利用技術來支持老年人，並設法為他們提供更多老年人的獨立程度。特別是，有必要確保物理和信息領域內的流動性達到適當水平，以防止個人保持獨立性並與社會互動。 \n \xa01.2.5用戶 \n \xa0可以看出，具有互聯網功能的設備的可用性通過使用社交媒體對社交行為產生了重大影響，但也允許比以往任何時候都更容易獲得信息。這樣的設備還支持與環境的交互級別提高，例如在智能家居中。此外，可穿戴設備的推出為 eHealth 和 mHealth 支持個人福祉，進而引發隱私和個人數據的控制。 \n \xa0但是，還需要開發新形式的用戶界面來支持，與此類系統進行交互的能力的用戶範圍更加廣泛。特別是，越來越需要能夠捕獲用戶意圖和上下文的信息。一種不需要復雜形式的交流或知識的方式的基礎技術。', 'tags': '', 'url': 'Assignment3.html'}, {'title': 'weeks', 'text': '', 'tags': '', 'url': 'weeks.html'}, {'title': 'week1~5', 'text': 'week1\xa0創建倉儲 \n 登入自己的github帳號後，創建新的倉儲cd2020。 3.進入要存放資料夾。 4.輸入 git clone \xa0 https://github.com/s40723239/cd2020複製 個人倉儲至資料夾 。 5.輸入git submodule add https://github.com/mdecourse/cmsimde.git 取得子模組資料。 6.進入cmsimde，輸入python -m pip install flask_cors 更改模組。 7.完成後，python wsgi.py 開始編輯倉儲(login密碼為admin)。 8.編輯完成後，git status \xa0 > \xa0 git add . \xa0 > \xa0 git commit -m "...." \xa0 > \xa0 git push \n \n week2 \n 1.在隨身系統下新增一個資料夾cd2020，並在cd2020下新建資料夾data，接著在data下新增資料夾py382及 wscite432、portablegit 。 2.進入 Python 官網。 3.點選Downloads下的 Windows ，並點選 Latest Python 3 Release - Python 3.8.2 。 \n 4.找到 Windows x86-64 executable installer 並下載。 \n 5.開始下載，必須將pip選項取消，接著按下next並將檔案下載至資料夾py382 \n 6.下載SciTE系統\xa0 full 64-bit download ，下載完後解壓縮至data下的wscite432。 \n 7.建立新的start.bat及stop.bat。 \n start.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n \n \n \n @echo   off \n set   Disk = y \n subst  % Disk % :  "data" \n \xa0 \xa0 \n % Disk % : \n \xa0 \xa0 \n set   HomePath = % Disk % :\\home \n set   HomeDrive = % Disk % :\\home \n set   Home = % Disk % :\\home \n set   USERPROFILE = % Disk % :\\home \n \xa0 \xa0 \n REM 將系統 Python 程式的 io 設為 utf - 8 \n set   PYTHONIOENCODING = "utf-8" \n \xa0 \xa0 \n #REM for putty \n #Set GIT_HOME=%CDisk%:\\portablegit\\bin\\ \n #Set GIT_SSH=%Disk%:\\putty\\plink.exe \n \xa0 \xa0 \n set   PYTHONPATH = % Disk % :\\py382\\DLLs; % Disk % :\\py382\\Lib; % Disk % :\\py382\\Lib\\site - packages; \n set   PYTHONHOME = % Disk % :\\py382 \n \xa0 \xa0 \n set   path_python = % Disk % :\\py382; % Disk % :\\py382\\Scripts; \n set   path_msys2 = % Disk % :\\msys64\\mingw64\\ bin ; \n set   path_git = % Disk % :\\portablegit\\ bin ; \n set   path_tcc = % Disk % :\\tcc; \n \xa0 \xa0 \n path = % Disk % :; % path_python % ; % path_msys2 % ; % path_git % ; % path_tcc % ; \n \xa0 \xa0 \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n \xa0 \xa0 \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n \xa0 \xa0 \n Exit \n \n \n \n \n \n \n \n stop.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n \n \n \n @echo   off \n set   Disk = y \n path = % PATH % ; \n \xa0 \xa0 \n taskkill  / IM python.exe  / F \n taskkill  / IM pythonw.exe  / F \n taskkill  / IM scite.exe  / F \n \xa0 \xa0 \n REM 終止虛擬硬碟與目錄的對應 \n subst  % Disk % :  / D \n REM 關閉 cmd 指令視窗 \n taskkill  / IM cmd.exe  / F \n \xa0 \xa0 \n EXIT \n \n \n \n \n \n \n \n 8. 下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。 9. 下載PortableGit\xa0 64-bit Git for Windows Portable \xa0至\xa0 portablegit下。 10 .安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。 11.執行指令 ，將python3.8.2版本缺少的模組下載下來。 \n \n \n \n \n \n \n 1 \n \n \n \n python get - pip.py \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 2 \n \n \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n \n \n \n \n \n week5 \n 使用obs直播 \n 前置作業 \n 1.下載電腦作業系統對應的obs。 \n 2.通過youtube驗證，並等待24小時使其開通。 \n 3.開啟前置鏡頭，若無電腦無前置鏡頭可用ivcam來替代。 \n obs載點: win10 \xa0 macOS \xa0 Linux \n ivcam載點: \xa0 win10 \xa0 Android \xa0 ios \n \n \n', 'tags': '', 'url': 'week1~5.html'}, {'title': 'week6~9', 'text': '安裝以下模組 \n 1.pip install opencv-python \n 2.pip install imutils \n 3.pip install numpy \n \n \n 四輪車的基本外型設置與以鍵盤控制四輪車 \n 1.點選Add->Primitive shape->Cuboid 建立四輪車的本體，給定尺寸並將車身拉高。 \n 2.點選Add->Primitive shape->Cylinder 建立四輪車的輪胎，給定尺寸並調整其方向及位置。 3.點選Add->Joint->Relvoute 新增馬達給予輪胎動力，調整其方向及位置。 4.接著調整馬達轉動的速率20並將結構設置好。 5.檢查本體的碰撞設置是否正確。 6.複製其輪胎並將位置及結構設置好。 7.開始進行模擬測試。 8.將四輪車的前輪馬達重新命名為right_motor及left_motor。 9.接著將寫好的子程式加入車體。 10.進行測試以鍵盤控制四輪車，即完成。 \n \n 更新leo 6.2.1 \n \n 先確定版本 pip list\xa0 \n 如果是6.1版本的話就先卸載 pip uninstall leo \n 接著安裝6.2.1\xa0\xa0pip install leo==6.2.1 \n \n', 'tags': '', 'url': 'week6~9.html'}, {'title': 'week10~14', 'text': 'week10\xa0\xa0google用戶登陸 \n 登錄到您的@gm帳戶 鏈接到 https://console.developers.google.com 接受許可並創建Google API項目 啟用Google +域API 在Google + Domain API憑據下，按CONFIGURE CONSENT SCREEN按鈕 選擇內部或外部用戶類型並添加新的應用程序名稱 在“ API和服務”下，進入“憑據”頁面 為Web應用程序創建“ OAuth 2.0客戶端ID”類型的憑據 授權的JavaScript來源：https：// localhost：8443 授權的重定向URI：https：// localhost：8443 / login / google / 將您的客戶ID和客戶機密保存到oauth_gm.txt中 \n 開啟leo更改config中的scrum為加上學號的txt檔案名稱， 並且修改完成之後按下save和darwROC pip install authomatic 開啟https://localhost:8443 測試是否可以運作 \n \n 以ssh對github連線: \n (1)到y槽的portablegit將sh_for_solvespace檔案複製並修改成sh.exe \n (2)進入黑窗輸入sh和 ssh-keygen -t rsa -b 4096 -C "使用者學號" \n (3)下載putty連線工具箱並利用其中的putty.gen創建兩把金鑰 \n (4)修改啟動器中的指令 \n set GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe (5)進入config中更改指令 url = git@github.com:mdecourse/cad2019.git在mdecourse的地方要改成自己的學號 \n (6)開啟putty.exe進去設定github.com和proxy位置其中ssh中的auth的地方必須選取剛剛創建的金鑰 \n (7)用編輯器複製課程網站中的step6指令並且儲存放入.ssh資料夾之中 \n (8)進入github並且在setting中的ssh將金鑰開啟並複製放入金鑰設置處 \n test \n Ubuntu設定及API連線 \n 操作步驟: 1.下載 vitualbox 、 ubuntu 、 CoppeliaSim 四輪車控制器檔案。 2.開啟vitualbox，匯入ubuntu。 3.設定虛擬主機的網路埠號。[NET:設定->網路->附加到(A)改成NAT->進階->連接埠轉送->設定三個埠號(22、8443、19999)]。 4.設定完成後啟動ubuntu。 5.輸入密碼kmol2020，並開啟lxterminal。 6.輸入xterm&開啟，並使用ctrl+右鍵將視窗放大。 7.依照步驟打開coppeliasim，輸入ls查看內容。 8.cd coppeliasim4_rev4接著輸入 ls再來輸入 cd\xa0 CoppeliaSim_Edu_V4_0_0_Ubuntu18_04輸入ls最後輸入./coppeliaSim.sh。 9.開啟後打開檔案sdc.ttt。 10.開啟啟動器，並開啟下載好的CoppeliaSim四輪車控制器檔案。 11.將檔案中的car_model.py放入編譯器中，並執行。 12.打開CoppeliaSim中的模擬，四輪車開始繞圈即成功。 \n \n IPv6 Ubuntu對外連線設定操作 \n 1.設定ipv6及主機網絡nat working 2.開啟ubnutu後開啟Lxtermialermial並且輸入cd /etc 3.按照路徑進入cd apt > cd apt.conf.d 4.pt > cd apt.conf.d 5.輸入sudo vi proxy.conf輸入密碼kmol202011並且以i鍵進入編輯模式 6.輸入Acquire::http::proxy "http://[2001:288:6004:17::53]:3128"; 7.按下esc並且使用:wq來儲存，再用sudo apt update apt update來更新apt 8.ifconfig>sudo apt install net-tools，cd etc/netplan 9.輸入sudo vi 00-installer-config.yaml並且按照影片中的方式更改縮排 10.輸入ping6 2001:288:6004:17::254對外部網路測試是否可以連線 11.新增埠號 12.輸入ifconfig 來查詢在ipv6下的guest fd17...9b8a那串 13.進入cd2020pj1 git config --global --add http.proxy [2001:288:6004:17::69]:3128 \n \n', 'tags': '', 'url': 'week10~14.html'}, {'title': 'week15~18', 'text': 'FileZilla 虛擬主機文件共享設定 \n 1.下載 FileZilla ，解縮到隨身系統中。 2.啟動Ubuntu主機，確認虛擬主機的整體系統埠號並開啟putty。 3.設定預連接IP為個人主機IP。 4.設定SSH中的X11，將Enable X11 fowarding打勾並在X display location中輸入localhost:0.0。 5.存儲後開啟，並輸入帳密kmol2020。 6.開啟FileZilla，點選檔案->站台管理員->新增站台個人主機IP。 7.將協定改為 SFTP-SSH，主機輸入個人主機IP及連接埠輸入22。 8.將登入型式改為詢問密碼、使用者命名為kmol2020。 9.設定完成後，點選連線，密碼輸入kmol2020。 10.即完成文件共享設定。 \n', 'tags': '', 'url': 'week15~18.html'}]};