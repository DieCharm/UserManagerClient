import {Component, EventEmitter, Output} from '@angular/core';
import {User} from "../../../models/user";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formModel: User = new User();
  @Output() onAdd = new EventEmitter();

  constructor(private userService: UsersService) { }

  create(): void {
    this.userService.create(this.formModel)
      .subscribe({
        next: () =>
        {
          this.onAdd.emit();
          this.formModel = new User();
        },
        error: () =>
          this.formModel = new User()
      });
  }

}
