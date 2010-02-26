var project_template = _.template(
              "<li id='<%= css %>'>" +
                // "<img class='preview' src='<%= image %>' alt='<%= name %>' title='<%= name %>' />" +
                "<div class='details'>" +
                  "<h3><%= name %></h3>" +
                    // "<span class='date'><%= date %></span>" +
                  "</div>" +
                  "<div class='roles'>" +
                    "<%= _.reduce(roles, '', function (memo, role) {return memo + '<span class=\"' + role[0] + '\">' + role[1] + '</span>'}) %>" +
                  "</div>" +                  
                "<br class='clear'/>" +
                "</li>")
                
var project_details_template = _.template(
                "<img class='preview' src='<%= image %>' alt='<%= name %>' title='<%= name %>' />" +
                  "<h3><%= name %></h3>" +
                    // "<span class='date'><%= date %></span>" +
                  "<div class='roles'>" +
                    "<%= _.reduce(roles, '', function (memo, role) {return memo + '<span class=\"' + role[0] + '\">' + role[1] + '</span>'}) %>" +
                  "</div>" +                  
                "<br class='clear'/>"
                )