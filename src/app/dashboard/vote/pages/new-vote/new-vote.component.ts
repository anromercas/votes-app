import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Community } from 'src/app/dashboard/community/interfaces/community.interface';
import { CommunityService } from '../../../community/services/community.service';

@Component({
  selector: 'app-new-vote',
  templateUrl: './new-vote.component.html',
  styleUrls: ['./new-vote.component.css']
})
export class NewVoteComponent implements OnInit{

  public form: FormGroup = this.fb.group({
    community: ['', Validators.required],
    voteName: ['', Validators.required],
    voteDescription: [''],
    voteType: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private communityService: CommunityService) { }

  ngOnInit(): void {
    this.communityService.getCommunities().subscribe(res => console.log(res));
  }

  get communities(): Community[] {
    return this.communityService.communities;
  }
 
}
