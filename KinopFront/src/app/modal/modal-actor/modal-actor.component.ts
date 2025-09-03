import {Component, Input, OnInit} from "@angular/core";
import {ActorModalService} from "../../services/actor-services/actor-modal.service";

@Component({
  selector: 'app-modal-actor',
  templateUrl: './modal-actor.component.html',
  styleUrls: ['./modal-actor.component.css']
})
export class ActorModalComponent implements OnInit {

  @Input() title: string

  constructor(public modalService: ActorModalService) { }

  ngOnInit(): void {
  }

}
