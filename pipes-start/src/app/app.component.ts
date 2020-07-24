import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("stable");
    }, 2000);
  });

  servers = [
    {
      instanceType: "medium",
      name: "Production",
      status: "critical",
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: "large",
      name: "User Database",
      status: "online",
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: "small",
      name: "Development Server",
      status: "offline",
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: "small",
      name: "Testing Environment Server",
      status: "stable",
      started: new Date(15, 1, 2017),
    },
  ];

  filteredStatus: any = "";
  status = ["stable", "critical", "offline", "online"];

  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      "list-group-item-success": server.status === "stable",
      "list-group-item-info": server.status === "online",
      "list-group-item-warning": server.status === "offline",
      "list-group-item-danger": server.status === "critical",
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: "small",
      name: "new Sever",
      status: this.status[Math.floor(Math.random() * Math.floor(4))],
      started: new Date(15, 1, 2017),
    });
  }
}
