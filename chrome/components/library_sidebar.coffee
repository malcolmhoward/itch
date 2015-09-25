
{ div } = React.DOM

component = require "./component"
UserPanel = require "./user_panel"
LibraryPanelLink = require "./library_panel_link"

module.exports = component {
  displayName: "LibrarySidebar"

  render: ->
    panel = @props.panel

    (div className: "sidebar",
      (UserPanel @props),
      (div { className: "panel_links" },
        (LibraryPanelLink {
          name: "owned"
          label: "Owned"
          panel
        })

        (LibraryPanelLink {
          name: "dashboard"
          label: "Dashboard"
          panel
        })
      )
    )

}

