(function(self, ns){
    var GENERIC_BUNDLE_URL = "https://fast.appcues.com/generic/main/4.31.20/appcues.main.3992bf95297aa4ddca5b63b20c9022fb8272530e.js";
    var ACCOUNT_DETAILS = {"GENERIC_BUNDLE_DOMAIN":"https://fast.appcues.com","GENERIC_BUNDLE_PATH":"/generic/main/4.31.20/appcues.main.3992bf95297aa4ddca5b63b20c9022fb8272530e.js","RELEASE_ID":"3992bf95297aa4ddca5b63b20c9022fb8272530e","VERSION":"4.31.20","account":{"gates":{"enableCTTEventIntegrations":false,"enableClientSideEventIntegrations":false},"isTrial":false,"isTrialExpired":false,"stripePlanId":"9750-enterprise-monthly"},"accountId":"48743","custom_events":[{"accountId":"48743","buildUrl":"https://learning.oreilly.review/search/?query=Docker&extended_publisher_data=true&highlight=true&include_assessments=false&include_case_studies=true&include_courses=true&include_playlists=true&include_collections=true&include_notebooks=true&include_sandboxes=true&include_scenarios=true&is_academic_institution_account=false&source=user&formats=sandbox&formats=scenario&formats=notebook&sort=relevance&facet_json=true&json_facets=true&page=0&include_facets=false","createdAt":1615490689000,"createdBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","disabledAt":null,"disabledBy":null,"enabled":true,"enabledAt":1615490689000,"enabledBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","id":"0093cd96-2fe4-46ba-8710-6bb442865534","name":"appcues_custom:Search_Click_InteractiveFilter","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[class] .Option--zHjRB:nth-child(6) [data-active]"}}],"updatedAt":1615490689000,"updatedBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","urls":["*"]},{"accountId":"48743","buildUrl":"https://learning.oreilly.com/library/view/head-first-git/9781492092506/","createdAt":1617818130000,"createdBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","disabledAt":null,"disabledBy":null,"enabled":true,"enabledAt":1617818130000,"enabledBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","id":"9177f1e7-7534-4425-855e-170856af3b47","name":"appcues_custom:UCV_Start_Book","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".orm-Link-root","text_filter":"Start"}}],"updatedAt":1617818844000,"updatedBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","urls":["*"]},{"accountId":"48743","buildUrl":"https://learning.oreilly.com/home/","createdAt":1609780049000,"createdBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","disabledAt":1609780049000,"disabledBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","enabled":true,"enabledAt":1609780291000,"enabledBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","id":"431e7bf3-8dd3-4f3c-ae18-dd9ff17c6592","name":"appcues_custom:Global_Search_Click","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".orm-ff-SearchBarView-newInput"}}],"updatedAt":1609780291000,"updatedBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","urls":["*"]},{"accountId":"48743","buildUrl":"https://learning.oreilly.com/playlists/9b34a346-fdf9-417d-b18e-316cf15db160/","createdAt":1614202662000,"createdBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","disabledAt":null,"disabledBy":null,"enabled":true,"enabledAt":1614202662000,"enabledBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","id":"0ee6fec4-cd0c-463c-a1b5-b05265b51939","name":"appcues_custom:Followed Expert","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".followWrapper--MAw4v button"}}],"updatedAt":1614202662000,"updatedBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","urls":["https://learning.oreilly.com/playlists/9b34a346-fdf9-417d-b18e-316cf15db160/"]},{"accountId":"48743","buildUrl":"https://learning.oreilly.com/playlists/7659927f-a488-43ca-84b1-c27475310798/","createdAt":1614618700000,"createdBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","disabledAt":null,"disabledBy":null,"enabled":true,"enabledAt":1614618700000,"enabledBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","id":"bad7fd4c-8b45-4beb-a3c4-87c233b8a96f","name":"appcues_custom:Follow Expert Playlist","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".followWrapper--MAw4v button"}}],"updatedAt":1614618700000,"updatedBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","urls":["https://learning.oreilly.com/playlists/*"]},{"accountId":"48743","buildUrl":"https://learning.oreilly.com/interactive-beta/","createdAt":1621969547000,"createdBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","disabledAt":null,"disabledBy":null,"enabled":true,"enabledAt":1621969547000,"enabledBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","id":"2fd3c456-c7da-4b7d-b7e2-096144b64f5c","name":"appcues_custom:Interactive_Beta_Kotlin_Start","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"article:nth-child(4) .orm-Card-fullCardLink"}}],"updatedAt":1621969547000,"updatedBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","urls":["https://learning.oreilly.com/interactive-beta/"]},{"accountId":"48743","buildUrl":"https://learning.oreilly.com/interactive-beta/","createdAt":1621969566000,"createdBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","disabledAt":null,"disabledBy":null,"enabled":true,"enabledAt":1621969566000,"enabledBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","id":"edbec6da-707d-42b6-a964-8e40f2aa7417","name":"appcues_custom:Interactive_Beta_Java_Start","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"article:nth-child(5) .orm-Card-fullCardLink"}}],"updatedAt":1621969566000,"updatedBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","urls":["https://learning.oreilly.com/interactive-beta/"]},{"accountId":"48743","buildUrl":"https://learning.oreilly.com/playlists/040a93b8-ad93-4b62-89d3-b5a316d42161/","createdAt":1623080685000,"createdBy":"8CsbnwhEebbL58hd0g6C6KpTSDC3","disabledAt":null,"disabledBy":null,"enabled":true,"enabledAt":1623080685000,"enabledBy":"8CsbnwhEebbL58hd0g6C6KpTSDC3","id":"a3ffccad-79f0-46b1-a6d6-bacafb84106e","name":"appcues_custom:I&O Kubernetes Earned Followers","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".followWrapper--MAw4v button"}}],"updatedAt":1623080685000,"updatedBy":"8CsbnwhEebbL58hd0g6C6KpTSDC3","urls":["https://learning.oreilly.com/playlists/040a93b8-ad93-4b62-89d3-b5a316d42161/"]},{"accountId":"48743","buildUrl":"https://learning.oreilly.com/interactive-beta/","createdAt":1621969495000,"createdBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","disabledAt":null,"disabledBy":null,"enabled":true,"enabledAt":1621969495000,"enabledBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","id":"8259f3a8-5824-4772-beb3-25cd10d959aa","name":"appcues_custom:Interactive_Beta_Kubernetes_Start","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"article:nth-child(2) .orm-Card-fullCardLink"}}],"updatedAt":1621969495000,"updatedBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","urls":["https://learning.oreilly.com/interactive-beta/"]},{"accountId":"48743","buildUrl":"https://learning.oreilly.com/interactive-beta/","createdAt":1621969523000,"createdBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","disabledAt":null,"disabledBy":null,"enabled":true,"enabledAt":1621969523000,"enabledBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","id":"89e5e1f0-18bf-42f8-b221-7e080434d34f","name":"appcues_custom:Interactive_Beta_Python_Start","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"article:nth-child(3) .orm-Card-fullCardLink"}}],"updatedAt":1621969523000,"updatedBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","urls":["https://learning.oreilly.com/interactive-beta/"]},{"accountId":"48743","buildUrl":"https://learning.oreilly.com/interactive-beta/","createdAt":1621969584000,"createdBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","disabledAt":null,"disabledBy":null,"enabled":true,"enabledAt":1621969584000,"enabledBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","id":"6c90dbae-81ec-443d-9e36-9d5ae7ccc832","name":"appcues_custom:Interactive_Beta_Go_Start","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"article:nth-child(6) .orm-Card-fullCardLink"}}],"updatedAt":1621969584000,"updatedBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","urls":["https://learning.oreilly.com/interactive-beta/"]},{"accountId":"48743","buildUrl":"https://learning.oreilly.com/interactive-beta/","createdAt":1621969607000,"createdBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","disabledAt":null,"disabledBy":null,"enabled":true,"enabledAt":1621969607000,"enabledBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","id":"978da7e1-e4b8-4ab2-909b-f529875da645","name":"appcues_custom:Interactive_Beta_R_Start","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"article:nth-child(7) .orm-Card-fullCardLink"}}],"updatedAt":1621969607000,"updatedBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","urls":["https://learning.oreilly.com/interactive-beta/"]},{"accountId":"48743","buildUrl":"https://learning.oreilly.com/playlists/caa16a2b-2ce8-4211-b268-852876b0bf70/","createdAt":1622819603000,"createdBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","disabledAt":null,"disabledBy":null,"enabled":true,"enabledAt":1622819603000,"enabledBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","id":"78aebf6b-c2c1-4fcf-bba4-92f8f84aeeff","name":"appcues_custom:SA Superstream: Moving to Microservices Follow","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".followWrapper--MAw4v button"}}],"updatedAt":1622819603000,"updatedBy":"hcZb5JP6ZQOtqTu077VXEJcPQwf1","urls":["https://learning.oreilly.com/playlists/caa16a2b-2ce8-4211-b268-852876b0bf70/"]},{"accountId":"48743","buildUrl":"https://learning.oreilly.com/playlists/2f98443b-f343-4e17-a10e-a6b87d9bb59b/","createdAt":1625166699000,"createdBy":"8CsbnwhEebbL58hd0g6C6KpTSDC3","disabledAt":null,"disabledBy":null,"enabled":true,"enabledAt":1625166699000,"enabledBy":"8CsbnwhEebbL58hd0g6C6KpTSDC3","id":"48516b65-0928-43d4-bccf-19b22064d3c8","name":"appcues_custom:Responsible AI Earned Followers","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".followWrapper--MAw4v button"}}],"updatedAt":1625166699000,"updatedBy":"8CsbnwhEebbL58hd0g6C6KpTSDC3","urls":["https://learning.oreilly.com/playlists/2f98443b-f343-4e17-a10e-a6b87d9bb59b/"]}],"integrations":{"ga":{"createdAt":1563903087924,"createdBy":"0suiLGvxCOfpSZXrP8HAPmzu84q2","id":"ga","integrationId":"48743:ga","isEnabled":true}},"styling":{"globalBeaconColor":"#d3002d","globalBeaconStyle":"","globalHotspotAnimation":"hotspot-animation-pulse","globalHotspotStyling":"","globalStyling":"\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i');\n\n\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i');\n\n\n.appcues-actions-right > .appcues-button.appcues-button-success, .appcues-progress-bar-success {\n    background-color: #d3002d;\n}\n.appcues-actions-right > .appcues-button.appcues-button-success:hover {\n    background-color: #f70035;\n}\n\n\n.appcues-actions-right .appcues-button {\n    color: #ffffff;\n}\n\n\n.appcues-actions-right .appcues-button:hover {\n    color: #ffffff !important;\n}\n\n\n.appcues-actions-left .appcues-button {\n    color: #d3002d;\n}\n\n\n.appcues-actions-right .appcues-button, .appcues-actions-left .appcues-button {\n    border-radius: 3px;\n}\n\n\nbody, appcues cue, .tooltip .content {\n    font-family: 'Open Sans', sans-serif;\n}\n\n\nbody h1, body h2, body h3, body h4, body h5,\nappcues cue h1, appcues cue h2, appcues cue h3, appcues cue h4, appcues cue h5,\n.tooltip .content h1, .tooltip .content h2, .tooltip .content h3, .tooltip .content h4, .tooltip .content h5 {\n    font-family: 'Open Sans', sans-serif;\n}\n\n\n  body, appcues cue, .tooltip .content {\n      color: #808080;\n  }\n  \n\n.tooltip .content .panel {\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.tooltip .content .panel:before, .tooltip .content .panel:after {\n  height: 13px;\n  width: 13px;\n  background-color: #ffffff;\n  border-radius: 2px;\n  border: none;\n  transform: rotate(45deg);\n}\n\n.tooltip .content .panel:after {\n  position: absolute;\n  content: \"\";\n  z-index: -1;\n}\n\n.tooltip .content.content-top .panel:before, .tooltip .content.content-top .panel:after {\n  margin-left: -7px;\n}\n\n.tooltip .content.content-top .panel:before,\n.tooltip .content.content-top .panel:after,\n.tooltip .content.content-top-left .panel:before,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-top-right .panel:before,\n.tooltip .content.content-top-right .panel:after {\n  margin-top: -6px;\n}\n\n.tooltip .content.content-bottom .panel:before, .tooltip .content.content-bottom .panel:after {\n  margin-left: -7px;\n}\n\n.tooltip .content.content-bottom .panel:before,\n.tooltip .content.content-bottom .panel:after,\n.tooltip .content.content-bottom-left .panel:before,\n.tooltip .content.content-bottom-left .panel:after,\n.tooltip .content.content-bottom-right .panel:before,\n.tooltip .content.content-bottom-right .panel:after {\n  margin-bottom: -6px;\n}\n\n.tooltip .content.content-right .panel:before, .tooltip .content.content-right .panel:after {\n  margin-top: -7px;\n}\n\n.tooltip .content.content-right .panel:before,\n.tooltip .content.content-right .panel:after,\n.tooltip .content.content-right-top .panel:before,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-right-bottom .panel:before,\n.tooltip .content.content-right-bottom .panel:after {\n  margin-right: -6px;\n}\n\n.tooltip .content.content-left .panel:before, .tooltip .content.content-left .panel:after {\n  margin-top: -7px;\n}\n\n.tooltip .content.content-left .panel:before,\n.tooltip .content.content-left .panel:after,\n.tooltip .content.content-left-top .panel:before,\n.tooltip .content.content-left-top .panel:after,\n.tooltip .content.content-left-bottom .panel:before,\n.tooltip .content.content-left-bottom .panel:after {\n  margin-left: -6px;\n}\n\n.tooltip .content.content-top-left .panel:before,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-bottom-left .panel:before,\n.tooltip .content.content-bottom-left .panel:after {\n  right: 10px;\n}\n\n.tooltip .content.content-top-right.panel:before,\n.tooltip .content.content-top-right .panel:after,\n.tooltip .content.content-bottom-right .panel:before,\n.tooltip .content.content-bottom-right .panel:after {\n  left: 10px;\n}\n\n.tooltip .content.content-right-bottom .panel:before,\n.tooltip .content.content-right-bottom .panel:after,\n.tooltip .content.content-left-bottom .panel:before,\n.tooltip .content.content-left-bottom .panel:after {\n  top: 10px;\n}\n\n.tooltip .content.content-right-top.panel:before,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-left-top .panel:before,\n.tooltip .content.content-left-top .panel:after {\n  bottom: 10px;\n}\n\n.tooltip .content.content-top .panel:after {\n  left: 50%;\n}\n\n.tooltip .content.content-top .panel:after,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-top-right .panel:after {\n  top: 100%;\n}\n\n.tooltip .content.content-bottom .panel:after {\n  left: 50%;\n}\n\n.tooltip .content.content-bottom .panel:after,\n.tooltip .content.content-bottom-left .panel:after,\n.tooltip .content.content-bottom-right .panel:after {\n  bottom: 100%;\n}\n\n.tooltip .content.content-right .panel:after {\n  top: 50%;\n}\n\n.tooltip .content.content-right .panel:after,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-right-bottom .panel:after {\n  right: 100%;\n}\n\n.tooltip .content.content-left .panel:after {\n  top: 50%;\n}\n\n.tooltip .content.content-left .panel:after,\n.tooltip .content.content-left-top .panel:after,\n.tooltip .content.content-left-bottom .panel:after {\n  left: 100%;\n}\n\n\n  .panel.panel-default {\n    margin-right: 3px;\n    margin-bottom: 2px;\n    border-radius: 3.5px;\n  }\n  \n\n  .panel.panel-default, .content .panel:after {\n    box-shadow: 1px 1px 2px hsla(0,0%,13%,.6);\n  }\n  \n\n      .appcues-backdrop[data-pattern-type=left], .appcues-backdrop[data-pattern-type=shorty], .appcues-backdrop[data-pattern-type=modal] {\n        background-color: #ffffff;\n      }\n      \n\n      .appcues-backdrop[data-pattern-type=left], .appcues-backdrop[data-pattern-type=shorty], .appcues-backdrop[data-pattern-type=modal] {\n        opacity: 0.9;\n      }\n      \n\nappcues cue {\n    background: #ffffff\n}\n\n/*\n\tIt's dangerous to go alone! Take this.\n\n\t(Not actually dangerous, but hopefully these selectors \n\twill help you make your flows look beautiful!)\n\n        \t   /|\n\t          / |\n\t         /  |\n\t        /   |\n\t       /    |\n\t      /     |\n\t      \\     |\n\t   /|  \\    |\n\t  / |   \\   |\n\t /  |    \\  |\n\t/___|     \\_| \n\n\tAPPCUES CSS SELECTORS\n*/\n\n/************************************/\n/* Appcues Base Presets */\n\n/*** Remove next/previous arrows */\nappcues .appcues-actions-right .appcues-button { padding-right: 18px; }\nappcues .appcues-actions-right .appcues-button:after { content: none; }\nappcues .appcues-actions-left .appcues-button { padding-left: 18px; }\nappcues .appcues-actions-left .appcues-button:before { content: none; }\n\n/*** Adjust style of progress bar */\n\nappcues .appcues-progress { background-color: white; height: 7px; border: 0; }\nappcues .appcues-progress .appcues-progress-bar { transition:width 0.5s ease 0.07s; }\nappcues .appcues-progress .appcues-progress-bar:not([aria-valuenow='100']) { border-top-right-radius: 0; border-bottom-right-radius: 0; }\n\n/*** Adjust margins & padding */\nappcues cue { min-height: 100px !important; padding: 22px 54px 82px; }\nappcues cue .apc-hero { margin: -22px -54px 0; }\n/* Fix up Hero typography */\nappcues cue .apc-hero h2 { font-size: 18px; font-weight: bold; }\nappcues[data-pattern-type=modal] cue {\n    box-shadow: 0 0 18px rgba(0,0,0,0.25);\n}\n.tooltip .panel { padding: 9px 12px 10px; }\n\n/*** Adjust typography */\nappcues cue h1, .tooltip h1 { font-weight: 200; font-size: 32px; margin-top: 0.5em; -webkit-font-smoothing:antialiased; }\nappcues cue h2, .tooltip h2 { font-weight: 400; font-size: 24px; margin-top: 0.5em; -webkit-font-smoothing:antialiased; }\nappcues cue h3, .tooltip h3 { font-weight: 600; letter-spacing: -0.01em; font-size: 20px; -webkit-font-smoothing:antialiased; }\nappcues cue h4,h5 { letter-spacing: -0.01em; margin-top: 0.75em; -webkit-font-smoothing:antialiased; }\np, li {\n    line-height: 1.6em;\n}\n\n/*** Adjust links in content */\nappcues cue section a[data-step], appcues cue section a[href], .tooltip p a[data-step], .tooltip p a[href] {\n    color: #3388ee;\n}\nappcues cue section a[data-step]:hover, appcues cue section a[href]:hover, .tooltip p a[data-step]:hover, .tooltip p a[href]:hover {\n    color: #1166cc;\n    text-decoration: underline; /* a18y */\n}\n\n/*** Adjust skip X */\nappcues .appcues-skip a { background: none; right: 6px; font-size: 28px; }\n.tooltip .panel .appcues-skip { color: #ccc; }\n\n/* End Appcues Base */\n/************************************/\n\n/*___Buttons and Links___*/\n.appcues-actions-right {\n\t/*[The section of the button row which hold the 'Next' or righthand side button.]*/\n}\n\n.tooltip .content .panel .panel-content-actions .appcues-actions-right {\n\t/*[Full selector to edit .appcues-actions-right in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-right {\n\t/*[Full selector to edit .appcues-actions-right in modals/slideouts]*/\n}\n\n\n.appcues-actions-left {\n\t/*[The section of the button row which hold the 'Prev' or lefthand side button.]*/\n}\n\n.tooltip .content .panel .panel-content-actions .appcues-actions-left {\n\t/*[Full selector to edit .appcues-actions-left in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-left {\n\t/*[Full selector to edit .appcues-actions-left in modals/slideouts]*/\n}\n\n\n.appcues-button {\n\t/*[Generic selector for any button.]*/\n}\n\n\n.appcues-button-success {\n\t/*[Selector for the 'Next' buttons (buttons which advance the step of the flow).]*/\n}\n\n.panel .panel-content-actions .appcues-actions-right > .appcues-button.appcues-button-success {\n\t/*[Full selector to edit .appcues-button-success in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-right > .appcues-button.appcues-button-success {\n\n\t/*[Full selector to edit .appcues-button-success in modals/slideouts]*/\n}\n\n.panel .panel-content-actions .appcues-skip {\n\t/*[Full selector to edit .appcues-skip in tooltips/hotspots] (Hide these tips)*/\n}\n\nappcues .appcues-skip {\n\t/*[Full selector to edit .appcues-skip in modals/slideouts] (X button to close)*/\n}\n\n\nappcues[data-pattern-type=shorty] cue {\n\t/*[Selector for slideouts specifically]*/\n}\n\nappcues[data-pattern-type=modal] cue {\n\t/*[Selector for modals specifically]*/\n}\n\n\n/*___Modals and Slideouts___*/\n\nappcues {\t\n\t/*[This element wraps the entire modal or slideout.]*/\n}\n\nappcues cue {\n\t/*[This is where the main content for modals and slideouts lives.]*/\n}\n\nappcues .appcues-backdrop[data-pattern-type=modal] {\n\t/*[The backdrop (darkened background) for modals.]*/\n}\n\nappcues .appcues-progress {\n\t/*[The progress bar which indicates how far a user is in the flow]*/\n}\n\nappcues cue .apc-hero {\n\t/*[This is the selector for a hero image.]*/\n}\n\n\nappcues cue .appcues-actions {\n\t/*[The row where all the buttons are placed.]*/\n}\n\n\n\n/*___Hotspots and Tooltips___*/\n\n.tooltip .content .panel {\n\t/*[This is selector for the tooltip panel itself. The styles to the arrow can be accessed using the ::before selector (see below)]*/\n}\n\n.tooltip .content .panel .panel-content {\n\t/*[This is the selector for any content within the tooltip. This applies to both body text and the actions row.]*/\n}\n\n.tooltip .content .panel .panel-content-actions {\n\t/*[The specific container selection for the row with buttons/actions.]*/\n}\n\n\n    appcues .appcues-actions-right .appcues-button { padding-right: 18px; }\n    appcues .appcues-actions-right .appcues-button:after { content: none; }\n    appcues .appcues-actions-left .appcues-button { padding-left: 18px; }\n    appcues .appcues-actions-left .appcues-button:before { content: none; }","id":"-L_Il4zkOsmrU-7ILVIt","typekitId":""}};
    var VERSION = ACCOUNT_DETAILS.VERSION;
    var RELEASE_ID = ACCOUNT_DETAILS.RELEASE_ID;
    var GENERIC_BUNDLE_DOMAIN = ACCOUNT_DETAILS.GENERIC_BUNDLE_DOMAIN;
    var accountId = ACCOUNT_DETAILS.accountId;
    var isBootstrapped = false;

    self.AppcuesBundleSettings = {
      accountId: accountId,
      VERSION: VERSION,
      RELEASE_ID: RELEASE_ID,
      GENERIC_BUNDLE_DOMAIN: GENERIC_BUNDLE_DOMAIN,
      GENERIC_BUNDLE_PATH: ACCOUNT_DETAILS.GENERIC_BUNDLE_PATH,
      styling:  ACCOUNT_DETAILS.styling,
      integrations: ACCOUNT_DETAILS.integrations,
      account: ACCOUNT_DETAILS.account,
      events: ACCOUNT_DETAILS.custom_events
    };

    var skipAMD = false;
    var windowGlobals = window["AppcuesSettings"];
    if (
      windowGlobals &&
      typeof windowGlobals === "object" &&
      windowGlobals.skipAMD === true
    ) {
      skipAMD = true;
    }

    var doc = self.document;
    self[ns] = self[ns] || [];
    var Appcues = self[ns];
    if (Appcues.invoked) {
        if (self.console && console.error) {
            console.error('Appcues snippet included twice.');
        }
        return;
    }

    if (Appcues.identify) return;
    Appcues.invoked = true;

    var methods = [
        "identify",
        "track",
        "page",
        "anonymous",
        "start",
        "show",
        "clearShow",
        "on",
        "off",
        "once",
        "reset",
        "debug",
        "user",
        "call",
        "settings",
        "content",
        "initMixpanel",
        "initHeap",
        "initIntercom",
        "initCIO",
        "initWoopra",
        "initAmplitude",
        "initKlaviyo",
        "initTD",
        "initLl",
        "initCalq",
        "initKM",
        "initGA",
        "initGTM",
        "initSegment",
        "injectContent",
        "injectStyles",
        "injectEvents",
        "cancelEvents",
        "loadLaunchpad"
    ];

    var promises = [
        "user"
    ];

    function factory(method){
        return function(){
            var args = Array.prototype.slice.call(arguments);
            if (isBootstrapped) {
              self.Appcues[method].apply(self.Appcues, args);
            } else {
              args.unshift(method);
              Appcues.push(args);
            }
            return self.Appcues;
        };
    }

    // For each of our methods, generate a queueing stub.
    for (var i = 0; i < methods.length; i++) {
        var key = methods[i];
        Appcues[key] = factory(key);
    }

    for (var i = 0; i < promises.length; i++) {
        var key = promises[i];
        Appcues[key] = function() {
          var args = Array.prototype.slice.call(arguments);
          if (isBootstrapped) {
            return self.Appcues[key].apply(self.Appcues, args);
          } else {
            return new Promise(function(resolve, _reject) {
              args.unshift(resolve);
              args.unshift(key);
              Appcues.push(args);
            });
          }
        };
    }

    if (
      !skipAMD &&
      typeof window.define === "function" &&
      window.define.amd &&
      (window.define.amd.vendor == null ||
        window.define.amd.vendor !== "dojotoolkit.org")
    ) {
      window.define(function() { return Appcues; });
    }

    function load(){
        var bundleScript = doc.createElement("script");
        bundleScript.crossOrigin = "anonymous";
        bundleScript.integrity = "sha256-lAQ5nv5ccM7KIC74iLxRVko0a90XkpiyKZV9p4Bx1HY=";
        bundleScript.type = "text/javascript";
        bundleScript.src = GENERIC_BUNDLE_URL;
        bundleScript.async = true;
        bundleScript.onload = function () {
            isBootstrapped = true;
            Appcues.forEach(function(call) {
                var fnName = call[0];
                var args = call.slice(1);
                if (promises.indexOf(fnName) === -1) {
                  self[ns] && self[ns][fnName] &&
                      self[ns][fnName].apply(self[ns], args);
                } else {
                  var resolve = args[0];
                  var promiseArgs = args.slice(1);
                  self[ns] && self[ns][fnName] &&
                    self[ns][fnName].apply(self[ns], promiseArgs).then(
                      function() { resolve(arguments[0]); }
                    );
                }
            });
        };

        var firstScript = doc.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(bundleScript, firstScript);
    }
    Appcues.SNIPPET_VERSION = VERSION;
    load();
})(window, 'Appcues');
