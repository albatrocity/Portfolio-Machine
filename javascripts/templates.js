var project_template = _.template(
              "<li id='<%= css %>'>" +
                "<img class='preview' src='<%= image %>' alt='<%= name %>' title='<%= name %>' />" +
                "<div class='details'>" +
                  "<h3><%= name %></h3>" +
                    "<span class='date'><%= date %></span>" +
                    "<div class='roles'>" +
                      "<%= _.reduce(roles, '', function (memo, role) {return '<span class=\"role[0]\">role[1]</span>'}) %>" +
                    "</div>" +
                  "</div>" +
                "<br class='clear'/>" +
                "</li>")